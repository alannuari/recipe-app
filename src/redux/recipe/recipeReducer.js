import { FETCH_FAILURE, FETCH_RECIPES_SUCCESS, FETCH_RECIPE_SUCCESS, SET_LOADING, SELECTED_RECIPE, SEARCH_RECIPE } from './recipeTypes';

const initialState = {
    loading: true,
    recipes: [],
    recipe: [],
    error: '',
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SELECTED_RECIPE:
            return {
                ...state,
                loading: true,
            };
        case FETCH_RECIPES_SUCCESS:
            return {
                ...state,
                loading: false,
                recipes: action.payload,
                error: '',
            };
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                loading: false,
                recipe: action.payload,
                error: '',
            };
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SEARCH_RECIPE:
            return {
                ...state,
                loading: true,
                recipes: state.recipes,
                error: '',
            };
        default:
            return state;
    }
};

export default recipeReducer;
