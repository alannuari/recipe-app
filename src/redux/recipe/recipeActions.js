import axios from 'axios';
import { FETCH_FAILURE, SET_LOADING, FETCH_RECIPES_SUCCESS, FETCH_RECIPE_SUCCESS, SELECTED_RECIPE, SEARCH_RECIPE } from './recipeTypes';

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};

export const selectedRecipe = () => {
    return {
        type: SELECTED_RECIPE,
    };
};

export const fetchRecipesSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: recipes,
    };
};

export const fetchRecipeSuccess = (recipe) => {
    return {
        type: FETCH_RECIPE_SUCCESS,
        payload: recipe,
    };
};

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error,
    };
};

export const searchRecipe = () => {
    return {
        type: SEARCH_RECIPE,
    };
};

export const fetchRecipes = () => {
    return (dispatch) => {
        axios
            .get('https://api-food-recipe.herokuapp.com/recipe')
            .then((res) => {
                const recipes = res.data;
                dispatch(fetchRecipesSuccess(recipes.data));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchFailure(error));
            });
    };
};

export const fetchSearchRecipes = (query) => {
    return (dispatch) => {
        axios
            .get(`https://api-food-recipe.herokuapp.com/search?q=${query}`)
            .then((res) => {
                const recipes = res.data;
                dispatch(fetchRecipesSuccess(recipes.data));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchFailure(error));
            });
    };
};

export const fetchRecipeDetail = (id) => {
    return (dispatch) => {
        axios
            .get(`https://api-food-recipe.herokuapp.com/recipe/${id}`)
            .then((res) => {
                const recipe = res.data;
                dispatch(fetchRecipeSuccess(recipe.data));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchFailure(error));
            });
    };
};
