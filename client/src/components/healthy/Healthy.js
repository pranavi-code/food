import React from "react";
import { Link } from 'react-router-dom';
import healthy1 from "../images/healthy1.jpeg";
import healthy2 from "../images/healthy2.jpeg";
import healthy3 from "../images/healthy3.jpeg";
import "./Healthy.css";
const HealthyMeals = () => {
    return (
        <div className="category-page">
            <h2>Healthy Meals</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={healthy1} className="card-img-top" alt="Healthy Meal 1" />
                            <div className="card-body">
                                <h5 className="card-title">Quinoa Salad</h5>
                                <p>Prep Time: 20 min | Rating: ★★★★☆</p>
                                <Link to="/quinoa">
                <button className="btn btn-view">View Recipe</button>
            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={healthy2} className="card-img-top" alt="Healthy Meal 2" />
                            <div className="card-body">
                                <h5 className="card-title">Grilled Chicken Salad</h5>
                                <p>Prep Time: 30 min | Rating: ★★★★★</p>
                                <Link to="/grilledchicken">
                <button className="btn btn-view">View Recipe</button>
            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={healthy3} className="card-img-top" alt="Healthy Meal 3" />
                            <div className="card-body">
                                <h5 className="card-title">Avocado Toast</h5>
                                <p>Prep Time: 15 min | Rating: ★★★★☆</p>
                                <Link to="/avacadotoast">
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

export default HealthyMeals;
