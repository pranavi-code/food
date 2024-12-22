import React from "react";
import { Link } from 'react-router-dom';
import dessert1 from "../images/dessert1.jpeg";
import dessert2 from "../images/dessert2.jpeg";
import dessert3 from "../images/dessert3.jpeg";
import "./Desserts.css";
const Desserts = () => {
    return (
        <div className="category-page">
            <h2>Desserts</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={dessert1} className="card-img-top" alt="Dessert 1" />
                            <div className="card-body">
                                <h5 className="card-title">Chocolate Cake</h5>
                                <p>Prep Time: 45 min | Rating: ★★★★★</p>
                                <Link to="/chocolatecake">
                <button className="btn btn-view">View Recipe</button>
            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={dessert2} className="card-img-top" alt="Dessert 2" />
                            <div className="card-body">
                                <h5 className="card-title">Cheesecake</h5>
                                <p>Prep Time: 60 min | Rating: ★★★★☆</p>
                                <Link to="/cheesecake">
                <button className="btn btn-view">View Recipe</button>
            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={dessert3} className="card-img-top" alt="Dessert 3" />
                            <div className="card-body">
                                <h5 className="card-title">Fruit Tart</h5>
                                <p>Prep Time: 30 min | Rating: ★★★★☆</p>
                                <Link to="/fruittart">
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

export default Desserts;
