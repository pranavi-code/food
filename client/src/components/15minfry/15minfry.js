import React from "react";

const StirFryDetails = () => {
  return (
    <div>
      {/* Similar Navbar */}
      <nav className="recipe-navbar navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="recipe-navbar-brand" href="/home">
            Culinary Quest
          </a>
          <button
            className="recipe-navbar-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="recipe-nav-link nav-link" href="/recipeSearch">
                  Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="recipe-nav-link nav-link" href="#categories-section">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="recipe-nav-link nav-link" href="/profile">
                  My Account
                </a>
              </li>
              <li className="nav-item">
                <a className="recipe-nav-link nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="recipe-hero-section">
        <h1>Quick Recipe: 15-Minute Stir Fry</h1>
        <p>
          A fast and flavorful stir fry loaded with fresh vegetables and your choice of protein.
        </p>
      </section>

      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Wok King
          </p>
          <p>
            <strong>Date Posted:</strong> 21st December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 5 minutes | <strong>Cook Time:</strong> 10 minutes | <strong>Serving Size:</strong> 2 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 tbsp Vegetable oil</li>
          <li>1 cup Broccoli florets</li>
          <li>1 cup Bell peppers, sliced</li>
          <li>1/2 cup Carrots, julienned</li>
          <li>1/2 cup Protein (e.g., chicken, tofu, shrimp)</li>
          <li>2 tbsp Soy sauce</li>
          <li>1 tbsp Sesame oil</li>
          <li>1 tsp Garlic, minced</li>
          <li>1 tsp Ginger, minced</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Heat vegetable oil in a wok or skillet over medium-high heat.</li>
          <li>Add garlic and ginger, sauté until fragrant.</li>
          <li>Add protein and cook until browned and cooked through.</li>
          <li>Add vegetables and stir fry for 5-7 minutes.</li>
          <li>Stir in soy sauce and sesame oil. Cook for an additional 2 minutes.</li>
          <li>Serve hot over rice or noodles.</li>
        </ol>
      </section>

      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default StirFryDetails;
    