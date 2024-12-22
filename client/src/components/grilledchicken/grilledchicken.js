import React from "react";

const GrilledChickenSaladDetails = () => {
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
      {/* Similar Navbar */}
      {/* Hero Section */}
      <section className="recipe-hero-section">
        <h1>Healthy Recipe: Grilled Chicken Salad</h1>
        <p>
          A delicious grilled chicken salad with fresh greens and a tangy dressing.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Martha Stewart
          </p>
          <p>
            <strong>Date Posted:</strong> 14th December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 15 minutes | <strong>Cook Time:</strong> 10 minutes | <strong>Serving Size:</strong> 2 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>2 Chicken breasts</li>
          <li>2 cups Mixed greens</li>
          <li>1/2 cup Cherry tomatoes, halved</li>
          <li>1/4 cup Red onion, sliced</li>
          <li>1/4 cup Feta cheese, crumbled</li>
          <li>2 tbsp Olive oil</li>
          <li>2 tbsp Lemon juice</li>
          <li>1 tsp Garlic powder</li>
          <li>1 tsp Salt</li>
          <li>1/2 tsp Black pepper</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Season chicken breasts with garlic powder, salt, and pepper.</li>
          <li>Grill chicken on medium heat until fully cooked (about 5 minutes per side).</li>
          <li>Let the chicken rest for 5 minutes before slicing.</li>
          <li>In a large bowl, combine mixed greens, tomatoes, red onion, and feta cheese.</li>
          <li>Top with grilled chicken slices.</li>
          <li>Drizzle with olive oil and lemon juice. Toss lightly and serve immediately.</li>
        </ol>
      </section>
      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default GrilledChickenSaladDetails;
