import React from "react";
import "./Home.css";
import { Link, useNavigate } from 'react-router-dom';
import dessert from "../images/dessert.jpg";
import healthy from "../images/healthy.jpg";
import homeImg from "../images/home.jpg";
import quickMeal from "../images/quickmeal.jpg";
import recipe1 from "../images/recipe1.jpg";
import recipe2 from "../images/recipe2.jpg";
import recipe3 from "../images/recipe3.jpg";
import vegan from "../images/vegan.jpg";

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear all auth-related items from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("username");
        
        // Redirect to login page
        navigate("/login");
    };

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid px-4">
                    <a className="navbar-brand fw-bold" href="/home">
                        Culinary Quest
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/recipeSearch">Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#categories">Categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">My Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className="btn btn-view nav-link" 
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                        <form className="d-flex ms-3">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search recipes..."
                                aria-label="Search"
                            />
                            <button className="btn btn-search" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="hero-section"
                style={{backgroundImage: `url(${homeImg})`}}
            >
                <div className="hero-overlay"></div>
                <h1>Welcome to Culinary Quest</h1>
                <p>Discover, create, and share your favorite recipes from around the globe.</p>
                <button className="btn btn-view mt-3">Explore Recipes</button>
            </section>

            {/* Featured Recipes Section */}
            <section className="featured-recipes">
                <h2>Featured Recipes</h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={recipe1} className="card-img-top" alt="Recipe 1"/>
                                <div className="card-body">
                                    <h5 className="card-title">Spaghetti Bolognese</h5>
                                    <p className="card-text">Prep Time: 30 min | Rating: ★★★★☆</p>
                                    <Link to="/recipes">
                <button className="btn btn-view">View Recipe</button>
            </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={recipe2} className="card-img-top" alt="Recipe 2"/>
                                <div className="card-body">
                                    <h5 className="card-title">Recipe Title 2</h5>
                                    <p className="card-text">Prep Time: 20 min | Rating: ★★★★★</p>
                                    <button className="btn btn-view">View Recipe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={recipe3} className="card-img-top" alt="Recipe 3"/>
                                <div className="card-body">
                                    <h5 className="card-title">Recipe Title 3</h5>
                                    <p className="card-text">Prep Time: 25 min | Rating: ★★★★☆</p>
                                    <button className="btn btn-view">View Recipe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="categories-section" id="categories">
                <h2>Explore Categories</h2>
                <div className="container">
                    <div className="row row-cols-2 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={dessert} className="card-img-top" alt="Desserts"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Desserts</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={vegan} className="card-img-top" alt="Vegan"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Vegan</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={quickMeal} className="card-img-top" alt="Quick Meals"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Quick Meals</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={healthy} className="card-img-top" alt="Healthy"/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Healthy</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 Culinary Quest. All rights reserved.</p>
            </footer>
        </>
    );
};

export default Home;
