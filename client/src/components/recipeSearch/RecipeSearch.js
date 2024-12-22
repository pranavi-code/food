import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./RecipeSearch.css";

// Spoonacular API key and base URL
const API_KEY = "d27e691f24ef40b7b63bfc091167f8fe";
const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const RECIPE_DETAILS_URL = "https://api.spoonacular.com/recipes";

const RecipeSearch = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();

        if (!query.trim()) {
            alert("Please enter a search term.");
            return;
        }

        try {
            const response = await fetch(`${API_URL}?query=${query}&apiKey=${API_KEY}&number=6`);
            const data = await response.json();
            setRecipes(data.results || []);
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
        <div className="container mt-5">
            {/* Search Bar */}
            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <form onSubmit={handleSearch} className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search recipes..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="btn btn-primary ms-2" type="submit">Search</button>
                    </form>
                </div>
            </div>

            {/* Search Results */}
            {recipes.length > 0 && (
                <div className="row">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src={recipe.image}
                                    className="card-img-top"
                                    alt={recipe.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.title}</h5>
                                    <button
                                        className="btn btn-info"
                                        onClick={() => handleViewRecipe(recipe.id)}
                                    >
                                        View Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* No results message */}
            {recipes.length === 0 && query && (
                <div className="alert alert-warning mt-4" role="alert">
                    No recipes found. Try a different search.
                </div>
            )}

            {/* Modal for Recipe Details */}
            {selectedRecipe && (
                <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedRecipe.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            src={selectedRecipe.image}
                            alt={selectedRecipe.title}
                            className="img-fluid mb-3"
                        />
                        <p><strong>Servings:</strong> {selectedRecipe.servings}</p>
                        <p><strong>Preparation Time:</strong> {selectedRecipe.readyInMinutes} minutes</p>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            {selectedRecipe.extendedIngredients.map((ingredient) => (
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default RecipeSearch;
