import React from "react";

const VeganBuddhaBowlDetails = () => {
  return (
    <div>
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

      {/* Hero Section */}
      <section className="recipe-hero-section">
        <h1>Healthy Recipe: Vegan Buddha Bowl</h1>
        <p>
          A nutrient-packed bowl filled with fresh vegetables, grains, and a delicious tahini dressing.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Plant Lover
          </p>
          <p>
            <strong>Date Posted:</strong> 22nd December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 10 minutes | <strong>Cook Time:</strong> 15 minutes | <strong>Serving Size:</strong> 2 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 cup Cooked quinoa or rice</li>
          <li>1 cup Roasted sweet potatoes</li>
          <li>1/2 cup Steamed broccoli</li>
          <li>1/2 cup Chickpeas</li>
          <li>1/4 cup Sliced cucumbers</li>
          <li>1/4 cup Sliced avocado</li>
          <li>2 tbsp Tahini</li>
          <li>1 tbsp Lemon juice</li>
          <li>1 tsp Maple syrup</li>
          <li>Salt and pepper to taste</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Layer quinoa or rice in a bowl as the base.</li>
          <li>Add roasted sweet potatoes, steamed broccoli, chickpeas, cucumbers, and avocado.</li>
          <li>In a small bowl, whisk together tahini, lemon juice, maple syrup, salt, and pepper.</li>
          <li>Drizzle the dressing over the bowl and serve immediately.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default VeganBuddhaBowlDetails;
