import React from "react";

const EggSaladSandwichDetails = () => {
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
        <h1>Quick Recipe: Egg Salad Sandwich</h1>
        <p>
          A creamy and delicious egg salad sandwich perfect for lunch or a quick snack.
        </p>
      </section>

      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Chef Sunny Side
          </p>
          <p>
            <strong>Date Posted:</strong> 22nd December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 10 minutes | <strong>Serving Size:</strong> 1 sandwich
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>2 Hard-boiled eggs</li>
          <li>2 tbsp Mayonnaise</li>
          <li>1/2 tsp Mustard</li>
          <li>1 tbsp Green onions, chopped</li>
          <li>Salt and pepper to taste</li>
          <li>2 slices of Bread</li>
          <li>Optional: Lettuce leaves</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Peel and mash hard-boiled eggs in a bowl.</li>
          <li>Mix in mayonnaise, mustard, green onions, salt, and pepper.</li>
          <li>Spread the egg salad onto one slice of bread.</li>
          <li>Top with lettuce, if desired, and cover with the other slice of bread.</li>
          <li>Cut in half and serve immediately.</li>
        </ol>
      </section>

      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default EggSaladSandwichDetails;
