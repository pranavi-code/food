import React from "react";

const ChocolateCakeDetails = () => {
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
        <h1>Delicious Recipe: Chocolate Cake</h1>
        <p>
          Indulge in the richness of homemade chocolate cake with this simple recipe.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Jane Doe
          </p>
          <p>
            <strong>Date Posted:</strong> 15th November, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 15 minutes | <strong>Cook Time:</strong> 35 minutes | <strong>Serving Size:</strong> 8 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 and 3/4 cups All-purpose flour</li>
          <li>3/4 cup Cocoa powder</li>
          <li>2 cups Sugar</li>
          <li>1 and 1/2 tsp Baking soda</li>
          <li>1 and 1/2 tsp Baking powder</li>
          <li>1 tsp Salt</li>
          <li>2 Eggs</li>
          <li>1 cup Whole milk</li>
          <li>1/2 cup Vegetable oil</li>
          <li>2 tsp Vanilla extract</li>
          <li>1 cup Boiling water</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Preheat the oven to 350°F (175°C) and grease a 9-inch round baking pan.</li>
          <li>In a large bowl, mix flour, cocoa powder, sugar, baking soda, baking powder, and salt.</li>
          <li>Add eggs, milk, oil, and vanilla extract. Beat on medium speed until smooth.</li>
          <li>Stir in boiling water (batter will be thin).</li>
          <li>Pour batter into the prepared pan and bake for 30-35 minutes, or until a toothpick comes out clean.</li>
          <li>Cool the cake in the pan for 10 minutes, then remove it to a wire rack to cool completely.</li>
          <li>Frost as desired and serve!</li>
        </ol>
      </section>

      {/* Share Section */}
      <section className="recipe-share-section container">
        <h4>Share This Recipe</h4>
        <div className="recipe-share-buttons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </section>
      {/* Footer */}
      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default ChocolateCakeDetails;
