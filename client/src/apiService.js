// src/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this with your actual backend URL

// Function to fetch all recipes
export const getRecipes = async (token) => {
    return await axios.get(`${API_URL}/recipes`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Function to add a new recipe
export const addRecipe = async (recipeData, token) => {
    return await axios.post(`${API_URL}/recipes`, recipeData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Function to update a recipe
export const updateRecipe = async (id, recipeData, token) => {
    return await axios.put(`${API_URL}/recipes/${id}`, recipeData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Function to delete a recipe
export const deleteRecipe = async (id, token) => {
    return await axios.delete(`${API_URL}/recipes/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
