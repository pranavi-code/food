import React from "react";
import { Link } from "react-router-dom";
import quickMeal1 from "../images/quickmeals1.jpeg";
import quickMeal2 from "../images/quickmeals2.jpeg";
import quickMeal3 from "../images/quickmeals3.jpeg";
import "./quickmeals.css";

const QuickMeals = () => {
    return (
        <div className="category-page">
            <h2>Quick Meals</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={quickMeal1} className="card-img-top" alt="Quick Meal 1" />
                            <div className="card-body">
                                <h5 className="card-title">Grilled Cheese Sandwich</h5>
                                <p>Prep Time: 10 min | Rating: ★★★★★</p>
                                <Link to="/grilledcheese">
                                                <button className="btn btn-view">View Recipe</button>
                                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={quickMeal2} className="card-img-top" alt="Quick Meal 2" />
                            <div className="card-body">
                                <h5 className="card-title">15-Minute Stir Fry</h5>
                                <p>Prep Time: 15 min | Rating: ★★★★☆</p>
                                <Link to="/15minfry">
                                                <button className="btn btn-view">View Recipe</button>
                                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={quickMeal3} className="card-img-top" alt="Quick Meal 3" />
                            <div className="card-body">
                                <h5 className="card-title">Egg Salad Sandwich</h5>
                                <p>Prep Time: 10 min | Rating: ★★★★★</p>
                                <Link to="/eggsalad">
                                                <button className="btn btn-view">View Recipe</button>
                                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickMeals;
