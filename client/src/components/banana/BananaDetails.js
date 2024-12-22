import React from "react";

const BananaDetails = () => {
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
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search recipes..."
                aria-label="Search"
              />
              <button className="recipe-btn-search btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="recipe-hero-section">
        <h1>Delicious Recipe: Banana Pancakes</h1>
        <p>
          Learn how to make the fluffiest Banana Pancakes with this simple, step-by-step guide.
        </p>
      </section>

      {/* Recipe Details Section */}
      <section className="recipe-details container">
        <h2>Recipe Information</h2>
        <div className="recipe-info">
          <p>
            <strong>Author:</strong> John Doe
          </p>
          <p>
            <strong>Date Posted:</strong> 12th November, 2024
          </p>
          <p>
            <strong>Prep Time:</strong> 10 minutes | <strong>Cook Time:</strong> 20 minutes | <strong>Serving Size:</strong> 4 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>2 ripe Bananas</li>
          <li>1 cup All-purpose flour</li>
          <li>1 tbsp Baking powder</li>
          <li>1/4 tsp Salt</li>
          <li>1 tbsp Sugar</li>
          <li>1 cup Milk</li>
          <li>1 Egg</li>
          <li>1 tsp Vanilla extract</li>
          <li>2 tbsp Melted butter (or oil)</li>
          <li>Butter or oil for cooking</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>In a large bowl, mash the bananas until smooth.</li>
          <li>In a separate bowl, whisk together the flour, baking powder, salt, and sugar.</li>
          <li>In another bowl, whisk the egg, milk, vanilla extract, and melted butter until combined.</li>
          <li>Pour the wet ingredients into the dry ingredients and stir until just combined (do not overmix).</li>
          <li>Heat a skillet or griddle over medium heat and lightly grease with butter or oil.</li>
          <li>Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown on both sides.</li>
          <li>Serve warm with your favorite toppings like syrup, fresh fruit, or whipped cream.</li>
        </ol>

        {/* Save and Share Buttons */}
        <button className="recipe-btn-save">Save Recipe</button>
        <button className="recipe-btn-share">Share Recipe</button>
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

      {/* Comments Section */}
      <section className="recipe-comments-section container">
        <h4>Comments</h4>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Leave a comment..."
        ></textarea>
        <button className="recipe-btn-post">Post Comment</button>

        {/* Already Posted Comments */}
        <div className="mt-4">
          <p>
            <strong>Jane Doe:</strong> These pancakes were delicious and so fluffy!
          </p>
          <p>
            <strong>Mike Smith:</strong> Perfect breakfast recipe, quick and easy!
          </p>
        </div>
      </section>

      {/* Related Recipes Section */}
      <section className="recipe-related-recipes container">
        <h3>Related Recipes</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Recipe 1"
              />
              <div className="card-body">
                <h5 className="card-title">Recipe 1</h5>
                <p className="card-text">Quick and easy pasta dish.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Recipe 2"
              />
              <div className="card-body">
                <h5 className="card-title">Recipe 2</h5>
                <p className="card-text">Delicious chicken curry.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Recipe 3"
              />
              <div className="card-body">
                <h5 className="card-title">Recipe 3</h5>
                <p className="card-text">Vegetarian delight.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="recipe-footer">
        <p>&copy; 2024 Culinary Quest | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default BananaDetails;
