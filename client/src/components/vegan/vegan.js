import React from "react";
import { Link } from "react-router-dom";
import vegan1 from "../images/vegan1.jpeg";
import vegan2 from "../images/vegan2.jpeg";
import vegan3 from "../images/vegan3.jpeg";
import "./vegan.css";
const Vegan = () => {
    return (
        <div className="category-page">
            <h2>Vegan Recipes</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={vegan1} className="card-img-top" alt="Vegan Recipe 1" />
                            <div className="card-body">
                                <h5 className="card-title">Vegan Buddha Bowl</h5>
                                <p>Prep Time: 25 min | Rating: ★★★★☆</p>
                                <Link to="/veganbuddha">
                                                <button className="btn btn-view">View Recipe</button>
                                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={vegan2} className="card-img-top" alt="Vegan Recipe 2" />
                            <div className="card-body">
                                <h5 className="card-title">Tofu Stir Fry</h5>
                                <p>Prep Time: 30 min | Rating: ★★★★★</p>
                                <Link to="/tofufrystir">
                                                <button className="btn btn-view">View Recipe</button>
                                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={vegan3} className="card-img-top" alt="Vegan Recipe 3" />
                            <div className="card-body">
                                <h5 className="card-title">Vegan Pancakes</h5>
                                <p>Prep Time: 20 min | Rating: ★★★★☆</p>
                                <Link to="/veganpancakes">
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

export default Vegan;
