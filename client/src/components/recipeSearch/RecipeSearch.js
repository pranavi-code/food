import React, { useState } from "react";
import "./RecipeSearch.css";

const API_KEY = "d27e691f24ef40b7b63bfc091167f8fe";
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const RECIPE_DETAILS_URL = "https://api.spoonacular.com/recipes";

const RecipeSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        if (!searchQuery.trim()) return;

        try {
            const response = await fetch(`${API_URL}?query=${searchQuery}&apiKey=${API_KEY}`);
            const data = await response.json();
            setSearchResults(data.results || []);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            alert("Failed to fetch recipes. Please try again.");
        }
    };

    const handleViewRecipe = async (id) => {
        try {
            const response = await fetch(`${RECIPE_DETAILS_URL}/${id}/information?apiKey=${API_KEY}`);
            const data = await response.json();
            setSelectedRecipe(data);
            setShowModal(true);
        } catch (error) {
            console.error("Error fetching recipe details:", error);
            alert("Failed to fetch recipe details. Please try again.");
        }
    };

    return (
        <div className="recipe-search">
            {/* Navbar */}
            <nav className="navbar rs-navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand rs-navbar-brand" href="/home">
                        Culinary Quest
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav rs-navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link rs-nav-link" href="/recipeSearch">
                                    Recipes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link rs-nav-link" href="#categories-section">
                                    Categories
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link rs-nav-link" href="/MyAccount">
                                    My Account
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link rs-nav-link" href="/contact">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="header rs-header">
                <h3>Discover Culinary Delights</h3>
                <p>Explore recipes from around the world. Search by name, ingredient, or cuisine!</p>
            </header>

            {/* Search Bar */}
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    className="form-control rs-form-control"
                    placeholder="Search for recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn rs-btn-search">
                    Search
                </button>
            </form>

            {/* Search Results */}
            <div className="search-results container">
                {searchResults.length > 0 ? (
                    <div className="row">
                        {searchResults.map((recipe) => (
                            <div key={recipe.id} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="recipe-card">
                                    <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                                    <h4>{recipe.title}</h4>
                                    <button className="btn btn-view" onClick={() => handleViewRecipe(recipe.id)}>
                                        View Recipe
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-results text-center">No recipes found. Try searching for something else!</p>
                )}
            </div>

            {/* Recipe Modal */}
            {showModal && selectedRecipe && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div
                        className="modal-content"
                        style={{
                            maxHeight: "80vh", // Limit height to 80% of viewport
                            overflowY: "auto", // Add vertical scrolling
                            textAlign: "left",
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setShowModal(false)}
                            style={{
                                color: "#000", // Black text
                                background: "none",
                                border: "none",
                                fontSize: "1.5rem",
                                cursor: "pointer",
                            }}
                        >
                            &times;
                        </button>
                        {/* Text Section */}
                        <div className="modal-details" style={{ color: "#000" }}> {/* Black text */}
                            <h2>{selectedRecipe.title}</h2>
                            <p>
                                <strong>Servings:</strong> {selectedRecipe.servings}
                            </p>
                            <p>
                                <strong>Preparation Time:</strong> {selectedRecipe.readyInMinutes} minutes
                            </p>
                            <h3>Ingredients</h3>
                            <ul>
                                {selectedRecipe.extendedIngredients.map((ingredient) => (
                                    <li key={ingredient.id}>{ingredient.original}</li>
                                ))}
                            </ul>
                            {selectedRecipe.analyzedInstructions?.length > 0 && (
                                <>
                                    <h3>Instructions</h3>
                                    <ol>
                                        {selectedRecipe.analyzedInstructions[0].steps.map((step) => (
                                            <li key={step.number}>{step.step}</li>
                                        ))}
                                    </ol>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeSearch;
