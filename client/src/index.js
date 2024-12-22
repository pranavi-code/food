import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Component imports
import AdminDashboard from "./components/AdminDash/AdminDashboard";
import CategoryManagement from "./components/CategoryManagement/CategoryManagement";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";

import StirFryDetails from "./components/15minfry/15minfry";
import Desserts from "./components/Dessets/Desserts";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import Register from "./components/Register/Register";
import TermsAndConditions from "./components/T&C/TermsAndConditions";
import AvocadoToastDetails from "./components/avacadotoast/avacadotoast";
import BananaDetails from "./components/banana/BananaDetails";
import BiryaniDetails from "./components/biryani/BiryaniDetails";
import CheesecakeDetails from "./components/cheesecake/cheeseCake";
import ChocolateCakeDetails from "./components/chocolatecake/chocolateCake";
import ContactUs from "./components/contactus/ContactUs";
import EditProfile from "./components/editprofile/EditProfile";
import EggSaladSandwichDetails from "./components/eggsalad/eggsalad";
import FeedbackReports from "./components/feedBack/FeedbackReports";
import FruitTartDetails from "./components/fruittart/fruittart";
import GrilledCheeseSandwichDetails from "./components/grilledcheese/grilledcheese";
import GrilledChickenSaladDetails from "./components/grilledchicken/grilledchicken";
import Healthy from "./components/healthy/Healthy";
import App from "./components/landing/App";
import Login from "./components/login/Login";
import MyAccount from "./components/myprofile/MyAccount";
import QuickMeals from "./components/quickmeals/quickmeals";
import QuinoaSaladDetails from "./components/quinoa/quinoa";
import RecipeManagement from "./components/recipeManagement/RecipeManagement";
import RecipeSearch from "./components/recipeSearch/RecipeSearch";
import RecipeDetails from "./components/recipes/RecipeDetails";
import PasswordReset from "./components/resetPassword/PasswordReset";
import ProfileSettings from "./components/settings/ProfileSettings";
import TofuStirFryDetails from "./components/tofustirfry/tofustirfry";
import UserManagement from "./components/userManagement/UserManagement";
import Vegan from "./components/vegan/vegan";
import VeganBuddhaBowlDetails from "./components/veganbuddha/veganbuddha";
import VeganPancakesDetails from "./components/veganpancakes/veganpancakes";
const router = createBrowserRouter([
    {
        path:"/veganpancakes",
        element:<VeganPancakesDetails/>
    },
    {
        path:"/veganbuddha",
        element:<VeganBuddhaBowlDetails/>
    },
    {
        path:"/tofufrystir",
        element:<TofuStirFryDetails/>
    },
    {
        path:"/15minfry",
        element:<StirFryDetails/>
    },
    {
        path:"/eggsalad",
        element:<EggSaladSandwichDetails/>
    },
    {
        path:"/grilledcheese",
        element:<GrilledCheeseSandwichDetails/>
    },
    {
        path:"/avacadoToast",
        element:<AvocadoToastDetails/>
    },
    {
        path:"/grilledchicken",
        element:<GrilledChickenSaladDetails/>
    },
    {
        path:"/quinoa",
        element:<QuinoaSaladDetails/>
    },
    {
        path:"/fruittart",
        element:<FruitTartDetails/>
    },
    {
        path:"/cheesecake",
        element:<CheesecakeDetails/>
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:"/profile",
        element:<MyAccount/>
    },
    {
        path:"/editProfile",
        element:<EditProfile/>
    },
    {
        path:"/contact",
        element:<ContactUs/>
    },
    {
        path:"/recipeSearch",
        element: <RecipeSearch/>
    },
    {
        path:"/recipes",
        element:<RecipeDetails/>
    },
    {
        path:"/privacy",
        element:<PrivacyPolicy/>
    },
    {
        path:"/terms",
        element:<TermsAndConditions/>
    },
    {
        path:"/resetPassword",
        element:<PasswordReset/>
    },
    {
        path:"/adminDash",
        element:<AdminDashboard/>
    },
    {
        path:"/categoryManagement",
        element:<CategoryManagement/>
    },
    {
        path:"/setting",
        element:<ProfileSettings/>
    },
    {
        path:"/userManagement",
        element:<UserManagement/>
    },
    {
        path:"/feedback",
        element:<FeedbackReports/>
    },
    {
        path:"/recipeManagement",
        element:<RecipeManagement/>
    },
    {
        path:"/biryani",
        element:<BiryaniDetails/>
    },
    {
        path:"/banana",
        element:<BananaDetails/>
    },
    {
        path:"/Desserts",
        element:<Desserts/>
    },
    {
        path:"/vegan",
        element:<Vegan/>
    },
    {
        path :"/quickmeals",
        element:<QuickMeals/>
    },
    {
        path:"/healthy",
        element:<Healthy/>
    },
    {
        path:"/chocolatecake",
        element:<ChocolateCakeDetails/>
    }
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);