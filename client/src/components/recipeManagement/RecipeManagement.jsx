import React, { useState } from 'react';
import './RecipeManagement.css';

const RecipeManagement = () => {
    // State to manage recipes
    const [recipes, setRecipes] = useState([]);
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        ingredients: '',
        steps: '',
        category: 'Italian',
        image: null,
    });

    // Handle logout functionality
    const logout = () => {
        sessionStorage.removeItem('authToken');
        localStorage.removeItem('authToken');
        window.location.href = "landing.html";
    };

    // Handle recipe approval
    const approveRecipe = (index) => {
        const updatedRecipes = [...recipes];
        updatedRecipes[index].status = 'Approved';
        setRecipes(updatedRecipes);
    };

    // Handle recipe rejection
    const rejectRecipe = (index) => {
        const updatedRecipes = [...recipes];
        updatedRecipes[index].status = 'Rejected';
        setRecipes(updatedRecipes);
    };

    // Handle recipe editing
    const editRecipe = (index) => {
        const recipe = recipes[index];
        alert(`Editing Recipe: ${recipe.name}`);
        // Implement editing logic here
    };

    // Handle recipe deletion
    const deleteRecipe = (index) => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            const updatedRecipes = recipes.filter((_, i) => i !== index);
            setRecipes(updatedRecipes);
        }
    };

    // Handle search functionality
    const filterRecipes = () => {
        let searchTerm = document.getElementById('recipeSearch').value.toLowerCase();
        let rows = document.querySelectorAll('.recipe-management-table tbody tr');
        rows.forEach(row => {
            let name = row.cells[0].innerText.toLowerCase();
            let ingredients = row.cells[1]?.innerText.toLowerCase();
            if (name.includes(searchTerm) || ingredients?.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    };

    // Handle recipe addition
    const handleAddRecipe = (e) => {
        e.preventDefault();
        
        const recipeToAdd = {
            ...newRecipe,
            status: 'Pending',
            submittedBy: 'Admin', // Placeholder for the submitted by field
        };

        // Update recipes state
        setRecipes([...recipes, recipeToAdd]);
        alert("Recipe added successfully!");

        // Manually hide the modal
        const modal = document.getElementById('addRecipeModal');
        const bootstrapModal = new window.bootstrap.Modal(modal);
        bootstrapModal.hide(); // Hides the modal

        // Reset the form
        setNewRecipe({
            name: '',
            ingredients: '',
            steps: '',
            category: 'Italian',
            image: null,
        });
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecipe((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setNewRecipe((prev) => ({
            ...prev,
            image: e.target.files[0],
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
                            <li className="nav-item"><a className="nav-link" href="/categoryManagement">Category Management</a></li>
                            <li className="nav-item"><a className="nav-link" href="/userManagement">Manage Users</a></li>
                            <li className="nav-item"><a className="nav-link" href="/setting">Settings</a></li>
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
                </div>

                {/* Search Bar */}
                <div className="mb-4">
                    <input type="text" className="form-control" id="recipeSearch" placeholder="Search recipes by name or ingredients" onKeyUp={filterRecipes} />
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
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipes.map((recipe, index) => (
                                        <tr key={index}>
                                            <td>{recipe.name}</td>
                                            <td>{recipe.submittedBy}</td>
                                            <td>{recipe.category}</td>
                                            <td><span className={`badge bg-${recipe.status === 'Approved' ? 'success' : recipe.status === 'Rejected' ? 'danger' : 'warning'}`}>{recipe.status}</span></td>
                                            <td>
                                                <button className="btn btn-success" onClick={() => approveRecipe(index)}>Approve</button>
                                                <button className="btn btn-danger" onClick={() => rejectRecipe(index)}>Reject</button>
                                                <button className="btn btn-warning" onClick={() => editRecipe(index)}>Edit</button>
                                                <button className="btn btn-secondary" onClick={() => deleteRecipe(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
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
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Upload Image</label>
                                        <input 
                                            type="file" 
                                            className="form-control" 
                                            id="image" 
                                            name="image" 
                                            accept="image/*" 
                                            onChange={handleFileChange} 
                                        />
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
