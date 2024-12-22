import React from "react";

const GrilledCheeseSandwichDetails = () => {
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
        <h1>Quick Recipe: Grilled Cheese Sandwich</h1>
        <p>
          A classic and comforting grilled cheese sandwich with gooey melted cheese.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Julia Child
          </p>
          <p>
            <strong>Date Posted:</strong> 20th December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 5 minutes | <strong>Cook Time:</strong> 5 minutes | <strong>Serving Size:</strong> 1 sandwich
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>2 slices of Bread</li>
          <li>2 slices of Cheese (e.g., Cheddar, American, or your choice)</li>
          <li>1 tbsp Butter</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Butter one side of each slice of bread.</li>
          <li>Place one slice, buttered side down, on a skillet over medium heat.</li>
          <li>Layer cheese slices on top and cover with the other slice of bread, buttered side up.</li>
          <li>Cook until golden brown, then flip and cook the other side until the cheese is melted.</li>
          <li>Serve hot and enjoy!</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default GrilledCheeseSandwichDetails;
