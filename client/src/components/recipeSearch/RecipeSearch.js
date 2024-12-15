import React, { useState } from "react";
import "./RecipeSearch.css";

const RecipeSearch = () => {
    const [query, setQuery] = useState("");
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [recipes, setRecipes] = useState([]);

    // Sample recipe data for initial display
    const sampleRecipes = [
        {
            id: 1,
            title: "Italian Pasta Carbonara",
            prepTime: "30 min",
            rating: "★★★★☆",
            image: "https://via.placeholder.com/300"
        },
        {
            id: 2,
            title: "Asian Stir-Fry Noodles",
            prepTime: "20 min",
            rating: "★★★★★",
            image: "https://via.placeholder.com/300"
        },
        {
            id: 3,
            title: "Mediterranean Salad",
            prepTime: "15 min",
            rating: "★★★★☆",
            image: "https://via.placeholder.com/300"
        }
    ];

    const handleSearch = async (event) => {
        event.preventDefault();
        setSearchPerformed(true);

        if (!query.trim()) {
            alert("Please enter a search term.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/recipes?query=${query}`);
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("Error fetching recipes:", error);
            setRecipes([]);
        }
    };

    // Display recipes based on search status
    const displayRecipes = searchPerformed ? recipes : sampleRecipes;

    return (
        <div className="body rs">
            {/* Navbar */}
            <nav className="navbar rs-navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand rs-navbar-brand" href="/home">Culinary Quest</a>
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
                            <li className="nav-item"><a className="nav-link rs-nav-link" href="/recipeSearch">Recipes</a></li>
                            <li className="nav-item"><a className="nav-link rs-nav-link" href="#categories-section">Categories</a></li>
                            <li className="nav-item"><a className="nav-link rs-nav-link" href="/MyAccount">My Account</a></li>
                            <li className="nav-item"><a className="nav-link rs-nav-link" href="/contact">Contact Us</a></li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control rs-form-control me-2" type="search" placeholder="Search recipes..." aria-label="Search" />
                            <button className="btn rs-btn-search" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="header rs-header">
                <h3>Find Your Next Favorite Recipe</h3>
                <p>Search by name, ingredient, or cuisine to discover new culinary adventures!</p>
            </header>

            {/* Search Bar */}
            <div className="search-bar rs-search-bar container">
                <input
                    type="text"
                    placeholder="Search recipes by name, ingredient, or cuisine..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn rs-btn" onClick={handleSearch}>Search</button>
            </div>

            {/* Filters Section */}
            <section className="filters-section rs-filters-section container">
                <h3>Filters</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="cuisineType" className="form-label rs-form-label">Cuisine Type</label>
                        <select id="cuisineType" className="form-control rs-form-control">
                            <option>Italian</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>Mexican</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prepTime" className="form-label rs-form-label">Preparation Time</label>
                        <input type="range" className="form-control rs-form-range" id="prepTime" min="0" max="120" defaultValue="30" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label rs-form-label">Dietary Restrictions</label>
                        <div className="form-check">
                            <input className="form-check-input rs-form-check-input" type="checkbox" id="vegan" />
                            <label className="form-check-label rs-form-check-label" htmlFor="vegan">Vegan</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input rs-form-check-input" type="checkbox" id="glutenFree" />
                            <label className="form-check-label rs-form-check-label" htmlFor="glutenFree">Gluten-Free</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input rs-form-check-input" type="checkbox" id="Nut-Free" />
                            <label className="form-check-label rs-form-check-label" htmlFor="Nut-Free">Nut-Free</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input rs-form-check-input" type="checkbox" id="Dairy-Free" />
                            <label className="form-check-label rs-form-check-label" htmlFor="Dairy-Free">Dairy-Free</label>
                        </div>
                    </div>
                    <button type="button" className="btn rs-btn-apply">Apply Filters</button>
                </form>
            </section>

            {/* Results Section */}
            <section className="results-section container">
                <h3>{searchPerformed ? 'Search Results' : 'Popular Recipes'}</h3>
                <div className="row">
                    {displayRecipes.length > 0 ? (
                        displayRecipes.map((recipe) => (
                            <div key={recipe.id} className="col-md-4 mb-4">
                                <div className="card recipe-card">
                                    <img 
                                        src={recipe.image} 
                                        alt={recipe.title}
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{recipe.title}</h5>
                                        <p className="card-text">
                                            Prep Time: {recipe.prepTime} | Rating: {recipe.rating}
                                        </p>
                                        <button className="btn btn-view">View Recipe</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        searchPerformed && <p className="text-center">No recipes found. Try a different search.</p>
                    )}
                </div>

                {/* Pagination */}
                {displayRecipes.length > 0 && (
                    <nav>
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#">Previous</a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </section>
        </div>
    );
};

export default RecipeSearch;