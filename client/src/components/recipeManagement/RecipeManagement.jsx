import React, { useState, useEffect } from 'react';
import './RecipeManagement.css';
import axios from 'axios';  // Add axios to send HTTP requests

const RecipeManagement = () => {
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        ingredients: '',
        steps: '',
        category: 'Italian',
        submittedBy: 'Admin',  // Add default user for the "submittedBy" field
    });
    const [errorMessage, setErrorMessage] = useState(''); // State for error messages

    // Fetch recipes from the backend when component mounts
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/recipes');
                setRecipes(response.data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
                setErrorMessage("Failed to fetch recipes.");
            }
        };

        fetchRecipes();
    }, []);

    const logout = () => {
        sessionStorage.removeItem('authToken');
        localStorage.removeItem('authToken');
        window.location.href = "landing.html";
    };

    // Add recipe to the backend
    const handleAddRecipe = async (e) => {
        e.preventDefault();

        if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.steps) {
            setErrorMessage("All fields are required.");
            return;
        }

        try {
            // Send POST request to the backend
            const response = await axios.post('http://localhost:5000/api/recipes', newRecipe);
            alert("Recipe added successfully!");

            // Update the recipes state with the new recipe
            setRecipes((prevRecipes) => [...prevRecipes, response.data]);

            // Hide modal and reset form
            const modal = document.getElementById('addRecipeModal');
            const bootstrapModal = new window.bootstrap.Modal(modal);
            bootstrapModal.hide(); // Hides the modal

            setNewRecipe({
                name: '',
                ingredients: '',
                steps: '',
                category: 'Italian',
                submittedBy: 'Admin',  // Reset to default submittedBy
            });

            setErrorMessage(''); // Clear any previous error messages
        } catch (error) {
            console.error("Error adding recipe:", error);
            setErrorMessage("Failed to add recipe.");
        }
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="recipe-management-page">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/adminDash">Admin Panel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/adminDash">Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link" href="/recipeManagement">Recipe Management</a></li>
                            <li className="nav-item"><a className="nav-link" href="/feedback">Feedback</a></li>
                            <a className="nav-link" href="/" id="logoutBtn" onClick={logout}>Logout</a>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container recipe-management-content">
                {/* Header */}
                <div className="recipe-management-header">
                    <h2>Recipe Management</h2>
                    {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                </div>

                {/* Recipe Table */}
                <div className="card mb-4">
                    <div className="card-header">Recipe List</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped recipe-management-table">
                                <thead>
                                    <tr>
                                        <th>Recipe Name</th>
                                        <th>Submitted By</th>
                                        <th>Category</th>
                                       {/*  <th>Status</th> */}
                                        {/* <th>Actions</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipes.length === 0 ? (
                                        <tr><td colSpan="5">No recipes found.</td></tr>
                                    ) : (
                                        recipes.map((recipe, index) => (
                                            <tr key={index}>
                                                <td>{recipe.name}</td>
                                                <td>{recipe.submittedBy}</td>
                                                <td>{recipe.category}</td>
                                                {/* <td><span className={`badge bg-${recipe.status === 'Approved' ? 'success' : recipe.status === 'Rejected' ? 'danger' : 'warning'}`}>{recipe.status}</span></td>
                                                <td>
                                                    <button className="btn btn-success">Approve</button>
                                                    <button className="btn btn-danger">Reject</button>
                                                    <button className="btn btn-warning">Edit</button>
                                                    <button className="btn btn-secondary">Delete</button>
                                                </td> */}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Add New Recipe Button */}
                <button className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#addRecipeModal">Add New Recipe</button>

                {/* Add Recipe Modal */}
                <div className="modal fade" id="addRecipeModal" tabIndex="-1" aria-labelledby="addRecipeModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addRecipeModalLabel">Add New Recipe</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form id="addRecipeForm" onSubmit={handleAddRecipe}>
                                    <div className="mb-3">
                                        <label htmlFor="recipeName" className="form-label">Recipe Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="recipeName" 
                                            name="name" 
                                            value={newRecipe.name} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="ingredients" className="form-label">Ingredients</label>
                                        <textarea 
                                            className="form-control" 
                                            id="ingredients" 
                                            name="ingredients" 
                                            rows="3" 
                                            value={newRecipe.ingredients} 
                                            onChange={handleInputChange} 
                                            required 
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="steps" className="form-label">Steps</label>
                                        <textarea 
                                            className="form-control" 
                                            id="steps" 
                                            name="steps" 
                                            rows="3" 
                                            value={newRecipe.steps} 
                                            onChange={handleInputChange} 
                                            required 
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <select 
                                            className="form-select" 
                                            id="category" 
                                            name="category" 
                                            value={newRecipe.category} 
                                            onChange={handleInputChange} 
                                            required 
                                        >
                                            <option value="Italian">Italian</option>
                                            <option value="Chinese">Chinese</option>
                                            <option value="Mexican">Mexican</option>
                                            <option value="Indian">Indian</option>
                                            <option value="Dessert">Dessert</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Recipe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeManagement;
