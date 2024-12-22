import React from "react";

const TofuStirFryDetails = () => {
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
      <section className="recipe-hero-section">
        <h1>Quick Recipe: Tofu Stir Fry</h1>
        <p>
          A flavorful stir fry with tofu and vibrant vegetables, perfect for a quick meal.
        </p>
      </section>

      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Vegan Chef
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
          <li>1 block Firm tofu, cubed</li>
          <li>1 tbsp Soy sauce</li>
          <li>1 tbsp Cornstarch</li>
          <li>1 tbsp Sesame oil</li>
          <li>1 cup Bell peppers, sliced</li>
          <li>1 cup Broccoli florets</li>
          <li>1 tsp Garlic, minced</li>
          <li>1 tsp Ginger, minced</li>
          <li>2 tbsp Soy sauce</li>
          <li>1 tbsp Maple syrup</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Coat tofu cubes with soy sauce and cornstarch.</li>
          <li>Heat sesame oil in a skillet and fry tofu until crispy. Remove and set aside.</li>
          <li>Add garlic, ginger, bell peppers, and broccoli to the skillet. Stir fry for 5 minutes.</li>
          <li>Return tofu to the skillet and add soy sauce and maple syrup. Cook for 2-3 minutes.</li>
          <li>Serve hot with rice or noodles.</li>
        </ol>
      </section>

      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default TofuStirFryDetails;
