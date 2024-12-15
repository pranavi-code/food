import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Component imports
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import App from "./components/landing/App";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";
import MyAccount from "./components/myprofile/MyAccount";
import EditProfile from "./components/editprofile/EditProfile";
import ContactUs from "./components/contactus/ContactUs";
import RecipeSearch from "./components/recipeSearch/RecipeSearch";
import RecipeDetails from "./components/recipes/RecipeDetails";
import PrivacyPolicy  from "./components/Privacy/PrivacyPolicy";
import TermsAndConditions from "./components/T&C/TermsAndConditions";
import PasswordReset from "./components/resetPassword/PasswordReset";
import AdminDashboard from "./components/AdminDash/AdminDashboard";
import CategoryManagement from "./components/CategoryManagement/CategoryManagement";
import ProfileSettings from "./components/settings/ProfileSettings";
import UserManagement from "./components/userManagement/UserManagement";
import FeedbackReports from "./components/feedBack/FeedbackReports";
import RecipeManagement from "./components/recipeManagement/RecipeManagement";
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
        path: "/register", // Register page
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
      }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
