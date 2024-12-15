import React from "react";
import "./RecipeDetails.css";

const RecipeDetails = () => {
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
        <h1>Delicious Recipe: Spaghetti Bolognese</h1>
        <p>
          Learn how to make the perfect spaghetti bolognese with our detailed
          step-by-step guide.
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
            <strong>Prep Time:</strong> 30 minutes | <strong>Cook Time:</strong>{" "}
            45 minutes | <strong>Serving Size:</strong> 4 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>200g Spaghetti</li>
          <li>300g Ground beef</li>
          <li>1 Onion, chopped</li>
          <li>2 cloves Garlic, minced</li>
          <li>1 can Tomato paste</li>
          <li>1 tbsp Olive oil</li>
          <li>1 tsp Oregano</li>
          <li>Salt & Pepper to taste</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Boil the spaghetti according to the package instructions.</li>
          <li>In a pan, heat olive oil and sauté the onions and garlic until soft.</li>
          <li>Add the ground beef and cook until browned.</li>
          <li>
            Stir in the tomato paste, oregano, salt, and pepper, and simmer for
            20 minutes.
          </li>
          <li>Serve the sauce over the spaghetti and enjoy!</li>
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
            <strong>Jane Doe:</strong> This recipe is fantastic! My family loved
            it.
          </p>
          <p>
            <strong>Mike Smith:</strong> Easy to follow, and the taste is amazing!
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

export default RecipeDetails;