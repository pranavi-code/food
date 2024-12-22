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

import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import Register from "./components/Register/Register";
import TermsAndConditions from "./components/T&C/TermsAndConditions";
import BananaDetails from "./components/banana/BananaDetails";
import BiryaniDetails from "./components/biryani/BiryaniDetails";
import ContactUs from "./components/contactus/ContactUs";
import EditProfile from "./components/editprofile/EditProfile";
import FeedbackReports from "./components/feedBack/FeedbackReports";
import App from "./components/landing/App";
import Login from "./components/login/Login";
import MyAccount from "./components/myprofile/MyAccount";
import RecipeManagement from "./components/recipeManagement/RecipeManagement";
import RecipeSearch from "./components/recipeSearch/RecipeSearch";
import RecipeDetails from "./components/recipes/RecipeDetails";
import PasswordReset from "./components/resetPassword/PasswordReset";
import ProfileSettings from "./components/settings/ProfileSettings";
import UserManagement from "./components/userManagement/UserManagement";

const router = createBrowserRouter([
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
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);