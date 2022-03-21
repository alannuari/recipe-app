import axios from 'axios';
import { FETCH_RECIPES_FAILURE, SET_LOADING, FETCH_RECIPES_SUCCESS, SELECTED_RECIPE, SEARCH_RECIPE, BACK_HOME } from './recipeTypes';

export const setLoading = () => {
    return {
        type: SET_LOADING,
    };
};

export const backHome = () => {
    return {
        type: BACK_HOME,
    };
};

export const selectedRecipe = () => {
    return {
        type: SELECTED_RECIPE,
    };
};

export const fetchRecipeSuccess = (recipes) => {
    return {
        type: FETCH_RECIPES_SUCCESS,
        payload: recipes,
    };
};

export const fetchRecipeFailure = (error) => {
    return {
        type: FETCH_RECIPES_FAILURE,
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
            .get('https://api-food-recipev2.herokuapp.com/recipe')
            .then((res) => {
                const recipes = res.data;
                dispatch(fetchRecipeSuccess(recipes));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchRecipeFailure(error));
            });
    };
};

export const fetchSearchRecipes = (query) => {
    return (dispatch) => {
        axios
            .get(`https://api-food-recipev2.herokuapp.com/search?q=${query}`)
            .then((res) => {
                const recipes = res.data;
                dispatch(fetchRecipeSuccess(recipes));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchRecipeFailure(error));
            });
    };
};

export const fetchRecipeDetail = (id) => {
    return (dispatch) => {
        axios
            .get(`https://api-food-recipev2.herokuapp.com/recipe/${id}`)
            .then((res) => {
                const recipe = res.data;
                dispatch(fetchRecipeSuccess(recipe.data));
            })
            .catch((err) => {
                const error = err.message;
                dispatch(fetchRecipeFailure(error));
            });
    };
};
