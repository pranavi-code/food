import React, { useState } from 'react';
import './CategoryManagement.css';
import backgroundImage from '../images/admin_dashboard.jpeg'; // Adjust the path as needed

const CategoryManagement = () => {
    const [categories, setCategories] = useState([
        { name: 'Italian', recipes: 25 },
        { name: 'Dessert', recipes: 15 },
    ]);
    const [newCategory, setNewCategory] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editCategory, setEditCategory] = useState('');

    const handleAddCategory = (event) => {
        event.preventDefault();
        if (newCategory.trim()) {
            setCategories([...categories, { name: newCategory, recipes: 0 }]);
            setNewCategory('');
        }
    };

    const handleEditCategory = (index) => {
        setEditIndex(index);
        setEditCategory(categories[index].name);
    };

    const handleUpdateCategory = (event) => {
        event.preventDefault();
        if (editCategory.trim()) {
            const updatedCategories = [...categories];
            updatedCategories[editIndex].name = editCategory;
            setCategories(updatedCategories);
            setEditIndex(null);
            setEditCategory('');
        }
    };

    const handleDeleteCategory = (index) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            setCategories(categories.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="category-management-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <nav className="navbar category-management-navbar  navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/adminDash">Admin Panel</a>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/adminDash">Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link" href="/recipeManagement">Recipe Management</a></li>
                            <li className="nav-item"><a className="nav-link" href="/categoryManagement">Category Management</a></li>
                            <li className="nav-item"><a className="nav-link" href="/userManagement">Manage Users</a></li>
                            <li className="nav-item"><a className="nav-link" href="/setting">Settings</a></li>
                            <li className="nav-item"><a className="nav-link" href="/feedback">Feedback</a></li>
                            <a className="nav-link" href="/">Logout</a>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="category-management-content">
                <div className="category-management-header">
                    <h2>Category Management</h2>
                </div>

                <button className="btn btn-success mb-4" data-bs-toggle="modal" data-bs-target="#addCategoryModal">Add New Category</button>

                <div className="card mb-4">
                    <div className="card-header">Category List</div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Number of Recipes</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category, index) => (
                                        <tr key={index}>
                                            <td>{category.name}</td>
                                            <td>{category.recipes}</td>
                                            <td>
                                                <button className="btn btn-primary btn-sm" onClick={() => handleEditCategory(index)}>Edit</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCategory(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <nav>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>

                <div className="modal fade" id="addCategoryModal" tabIndex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addCategoryModalLabel">Add New Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleAddCategory}>
                                    <div className="mb-3">
                                        <label htmlFor="categoryName" className="form-label">Category Name</label>
                                        <input type="text" className="form-control" id="categoryName" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="editCategoryModal" tabIndex="-1" aria-labelledby="editCategoryModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editCategoryModalLabel">Edit Category</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleUpdateCategory}>
                                    <div className="mb-3">
                                        <label htmlFor="editCategoryName" className="form-label">Category Name</label>
                                        <input type="text" className="form-control" id="editCategoryName" value={editCategory} onChange={(e) => setEditCategory(e.target.value)} required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="category-management-footer">
                <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CategoryManagement;
