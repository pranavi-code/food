import React from "react";
import "./BiryaniDetails.css";

const BiryaniDetails = () => {
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
        <h1>Delicious Recipe: Chicken Biryani</h1>
        <p>
          Learn how to make the perfect Chicken Biryani with our detailed
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
            <strong>Prep Time:</strong> 30 minutes | <strong>Cook Time:</strong> 60 minutes | <strong>Serving Size:</strong> 4 servings
          </p>
        </div>

        <h3>Ingredients:</h3>
        <ul className="recipe-ingredients">
          <li>500g Chicken, cut into pieces</li>
          <li>2 cups Basmati rice</li>
          <li>1 cup Yogurt</li>
          <li>2 Onions, thinly sliced</li>
          <li>2 Tomatoes, chopped</li>
          <li>4 cloves Garlic, minced</li>
          <li>1-inch Ginger, minced</li>
          <li>3 Green chilies, slit</li>
          <li>2 tbsp Biryani masala</li>
          <li>1 tsp Turmeric powder</li>
          <li>1 tsp Red chili powder</li>
          <li>4 tbsp Ghee or Oil</li>
          <li>2 cups Water</li>
          <li>Whole spices: 2 Bay leaves, 4 Cardamom pods, 4 Cloves, 1 Cinnamon stick</li>
          <li>Fresh Coriander and Mint leaves, for garnishing</li>
          <li>Saffron strands soaked in warm milk</li>
          <li>Salt, to taste</li>
        </ul>

        <h3>Steps:</h3>
        <ol className="recipe-steps">
          <li>Wash and soak the basmati rice for 30 minutes, then cook until 70% done. Drain and set aside.</li>
          <li>Heat ghee in a pan, fry the whole spices, and sauté the onions until golden brown.</li>
          <li>Add garlic, ginger, and green chilies. Cook until fragrant.</li>
          <li>Stir in tomatoes, turmeric, chili powder, and biryani masala. Cook until oil separates.</li>
          <li>Add the chicken, yogurt, and salt. Cook until the chicken is tender.</li>
          <li>In a large pot, layer the cooked chicken mixture, parboiled rice, and garnishes like saffron milk, coriander, and mint.</li>
          <li>Cover the pot and cook on low heat (dum method) for 20-25 minutes.</li>
          <li>Serve hot with raita or salad.</li>
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

export default BiryaniDetails;