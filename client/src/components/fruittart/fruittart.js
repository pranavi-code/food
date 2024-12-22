import React from "react";

const FruitTartDetails = () => {
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
        <h1>Delicious Recipe: Fruit Tart</h1>
        <p>
          Make a stunning fruit tart with a buttery crust, creamy custard, and fresh fruits.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> Sarah Lee
          </p>
          <p>
            <strong>Date Posted:</strong> 22nd December, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 30 minutes | <strong>Cook Time:</strong> 20 minutes | <strong>Chill Time:</strong> 1 hour | <strong>Serving Size:</strong> 8 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>1 and 1/2 cups All-purpose flour</li>
          <li>1/2 cup Unsalted butter, cold and diced</li>
          <li>1/4 cup Granulated sugar</li>
          <li>1 Large egg yolk</li>
          <li>2-3 tbsp Ice water</li>
          <li>1 cup Milk</li>
          <li>3 Large egg yolks</li>
          <li>1/3 cup Granulated sugar</li>
          <li>2 tbsp Cornstarch</li>
          <li>1 tsp Vanilla extract</li>
          <li>Fresh fruits (e.g., strawberries, kiwi, blueberries, raspberries)</li>
          <li>Optional: Apricot jam for glaze</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>
            Preheat the oven to 375°F (190°C). Grease a 9-inch tart pan with removable bottom.
          </li>
          <li>
            In a bowl, mix flour, sugar, and cold butter. Use your hands or a pastry cutter to combine until crumbly.
          </li>
          <li>
            Add the egg yolk and ice water, mixing until the dough comes together. Wrap in plastic wrap and chill for 20 minutes.
          </li>
          <li>
            Roll out the dough and press it into the tart pan. Trim the edges and prick the base with a fork.
          </li>
          <li>Bake for 15-20 minutes or until golden. Let cool completely.</li>
          <li>
            For the custard, heat milk in a saucepan until warm. In a bowl, whisk egg yolks, sugar, and cornstarch.
          </li>
          <li>
            Slowly add the warm milk to the egg mixture, whisking constantly. Return to the saucepan and cook until thickened.
          </li>
          <li>
            Stir in vanilla extract, then cover with plastic wrap to prevent a skin from forming. Let cool.
          </li>
          <li>
            Fill the cooled tart shell with custard. Top with fresh fruits in a decorative pattern.
          </li>
          <li>
            Optional: Brush with warmed apricot jam for a glossy finish. Chill for at least 1 hour before serving.
          </li>
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

export default FruitTartDetails;
