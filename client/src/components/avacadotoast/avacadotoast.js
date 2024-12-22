import React from "react";

const AvocadoToastDetails = () => {
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
      {/* Hero Section */}
      <section className="recipe-hero-section">
        <h1>Quick Recipe: Avocado Toast</h1>
        <p>
          A simple and nutritious avocado toast recipe that's perfect for breakfast or brunch.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Gordon Ramsay
          </p>
          <p>
            <strong>Date Posted:</strong> 18th December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 5 minutes | <strong>Serving Size:</strong> 1 serving
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 slice Whole grain bread</li>
          <li>1/2 Ripe avocado</li>
          <li>1 tsp Lemon juice</li>
          <li>1 pinch Salt</li>
          <li>1 pinch Red chili flakes</li>
          <li>Optional: 1 Fried egg, Microgreens</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Toast the slice of bread until golden and crisp.</li>
          <li>In a small bowl, mash the avocado with lemon juice and a pinch of salt.</li>
          <li>Spread the avocado mixture evenly over the toasted bread.</li>
          <li>Sprinkle with red chili flakes and top with optional fried egg or microgreens.</li>
          <li>Serve immediately and enjoy!</li>
        </ol>
      </section>
      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AvocadoToastDetails;
