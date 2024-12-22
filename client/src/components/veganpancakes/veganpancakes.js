import React from "react";

const VeganPancakesDetails = () => {
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
        <h1>Delicious Recipe: Vegan Pancakes</h1>
        <p>
          Fluffy and delicious pancakes made with simple vegan ingredients.
        </p>
      </section>

      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Pancake Lover
          </p>
          <p>
            <strong>Date Posted:</strong> 22nd December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 5 minutes | <strong>Cook Time:</strong> 10 minutes | <strong>Serving Size:</strong> 4 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 cup All-purpose flour</li>
          <li>1 tbsp Baking powder</li>
          <li>1/4 tsp Salt</li>
          <li>1 tbsp Sugar</li>
          <li>1 cup Plant-based milk (e.g., almond, soy)</li>
          <li>1 tbsp Vegetable oil</li>
          <li>1 tsp Vanilla extract</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>In a bowl, whisk together flour, baking powder, salt, and sugar.</li>
          <li>In another bowl, mix plant-based milk, vegetable oil, and vanilla extract.</li>
          <li>Combine wet and dry ingredients until just mixed (do not overmix).</li>
          <li>Heat a skillet over medium heat and lightly grease with oil.</li>
          <li>Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form, flip, and cook until golden brown.</li>
          <li>Serve with maple syrup or your favorite toppings.</li>
        </ol>
      </section>

      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default VeganPancakesDetails;
