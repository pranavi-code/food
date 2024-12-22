import React from "react";

const CheesecakeDetails = () => {
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
        <h1>Delicious Recipe: Classic Cheesecake</h1>
        <p>
          Learn how to make a creamy, decadent classic cheesecake with a graham cracker crust.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Emily Baker
          </p>
          <p>
            <strong>Date Posted:</strong> 20th December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 20 minutes | <strong>Cook Time:</strong> 1 hour | <strong>Chill Time:</strong> 4 hours | <strong>Serving Size:</strong> 8 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 and 1/2 cups Graham cracker crumbs</li>
          <li>1/3 cup Granulated sugar</li>
          <li>1/2 cup Unsalted butter, melted</li>
          <li>4 packages (8 oz each) Cream cheese, softened</li>
          <li>1 cup Granulated sugar</li>
          <li>1 tsp Vanilla extract</li>
          <li>4 Large eggs</li>
          <li>1/3 cup Sour cream</li>
          <li>1/4 cup All-purpose flour</li>
          <li>Optional toppings: Fresh berries, whipped cream, or fruit syrup</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Preheat the oven to 325°F (165°C). Grease a 9-inch springform pan.</li>
          <li>In a medium bowl, combine graham cracker crumbs, 1/3 cup sugar, and melted butter. Press the mixture firmly into the bottom of the prepared pan.</li>
          <li>Bake the crust for 10 minutes, then set aside to cool.</li>
          <li>In a large mixing bowl, beat the cream cheese and 1 cup of sugar until smooth and creamy.</li>
          <li>Add in the vanilla extract and sour cream. Mix until combined.</li>
          <li>One at a time, beat in the eggs at low speed until just blended. Do not overmix.</li>
          <li>Gently fold in the flour until incorporated.</li>
          <li>Pour the batter over the crust. Smooth the top with a spatula.</li>
          <li>Bake the cheesecake for 50-60 minutes, or until the edges are set and the center is slightly jiggly.</li>
          <li>Turn off the oven and let the cheesecake cool in the oven for 1 hour with the door ajar to prevent cracking.</li>
          <li>Refrigerate the cheesecake for at least 4 hours (preferably overnight) before serving.</li>
          <li>Top with your favorite toppings and enjoy!</li>
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

export default CheesecakeDetails;
