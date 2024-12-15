import React from 'react';
import './RecipeManagement.css';
const RecipeManagement = () => {
    const logout = () => {
        sessionStorage.removeItem('authToken');
        localStorage.removeItem('authToken');
        window.location.href = "landing.html";
    };

    const approveRecipe = (button) => {
        let row = button.closest('tr');
        let statusCell = row.querySelector('td:nth-child(4)');
        statusCell.innerHTML = '<span class="badge bg-success">Approved</span>';
    };

    const rejectRecipe = (button) => {
        let row = button.closest('tr');
        let statusCell = row.querySelector('td:nth-child(4)');
        statusCell.innerHTML = '<span class="badge bg-danger">Rejected</span>';
    };

    const editRecipe = (button) => {
        let row = button.closest('tr');
        let name = row.cells[0].innerText;
        let category = row.cells[2].innerText;
        let steps = row.cells[3].innerText;
        alert(`Editing Recipe: ${name}`);
    };

    const deleteRecipe = (button) => {
        let row = button.closest('tr');
        if (confirm("Are you sure you want to delete this recipe?")) {
            row.remove();
        }
    };

    const filterRecipes = () => {
        let searchTerm = document.getElementById('recipeSearch').value.toLowerCase();
        let rows = document.querySelectorAll('.recipe-management-table tr');
        rows.forEach(row => {
            let name = row.cells[0].innerText.toLowerCase();
            let ingredients = row.cells[1].innerText.toLowerCase();
            if (name.includes(searchTerm) || ingredients.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
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
                                <tbody id="recipeList">
                                    <tr>
                                        <td>Spaghetti Carbonara</td>
                                        <td>John Doe</td>
                                        <td>Italian</td>
                                        <td><span className="badge bg-warning">Pending</span></td>
                                        <td>
                                            <button className="btn btn-success btn-sm" onClick={(e) => approveRecipe(e.target)}>Approve</button>
                                            <button className="btn btn-danger btn-sm" onClick={(e) => rejectRecipe(e.target)}>Reject</button>
                                            <button className="btn btn-primary btn-sm" onClick={(e) => editRecipe(e.target)}>Edit</button>
                                            <button className="btn btn-danger btn-sm" onClick={(e) => deleteRecipe(e.target)}>Delete</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chocolate Cake</td>
                                        <td>Jane Smith</td>
                                        <td>Dessert</td>
                                        <td><span className="badge bg-success">Approved</span></td>
                                        <td>
                                            <button className="btn btn-primary btn-sm" onClick={(e) => editRecipe(e.target)}>Edit</button>
                                            <button className="btn btn-danger btn-sm" onClick={(e) => deleteRecipe(e.target)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Pagination (Placeholder) */}
                <nav>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>

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
                                <form id="addRecipeForm">
                                    <div className="mb-3">
                                        <label htmlFor="recipeName" className="form-label">Recipe Name</label>
                                        <input type="text" className="form-control" id="recipeName" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="ingredients" className="form-label">Ingredients</label>
                                        <textarea className="form-control" id="ingredients" rows="3" required></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="steps" className="form-label">Steps</label>
                                        <textarea className="form-control" id="steps" rows="3" required></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <select className="form-select" id="category" required>
                                            <option value="Italian">Italian</option>
                                            <option value="Dessert">Dessert</option>
                                            <option value="Mexican">Mexican</option>
                                            <option value="Indian">Indian</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="recipeImage" className="form-label">Recipe Image</label>
                                        <input type="file" className="form-control" id="recipeImage" accept="image/*" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer-wrapper">
                <footer>
                    <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default RecipeManagement;
