import React from "react";

const QuinoaSaladDetails = () => {
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
        <h1>Healthy Recipe: Quinoa Salad</h1>
        <p>
          A nutritious and vibrant quinoa salad packed with fresh vegetables and zesty flavors.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Jamie Oliver
          </p>
          <p>
            <strong>Date Posted:</strong> 10th December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 20 minutes | <strong>Serving Size:</strong> 4 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 cup Quinoa</li>
          <li>2 cups Water</li>
          <li>1 cup Cherry tomatoes, halved</li>
          <li>1 cup Cucumber, diced</li>
          <li>1/2 cup Red onion, finely chopped</li>
          <li>1/2 cup Fresh parsley, chopped</li>
          <li>1/4 cup Olive oil</li>
          <li>2 tbsp Lemon juice</li>
          <li>1 tsp Salt</li>
          <li>1/2 tsp Black pepper</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Rinse quinoa under cold water. In a pot, combine quinoa and water, bring to a boil, then simmer until water is absorbed (about 15 minutes).</li>
          <li>Let quinoa cool completely.</li>
          <li>In a large bowl, combine cooked quinoa, tomatoes, cucumber, red onion, and parsley.</li>
          <li>In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.</li>
          <li>Pour dressing over the quinoa mixture and toss well to combine.</li>
          <li>Chill in the fridge for 30 minutes before serving.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default QuinoaSaladDetails;
