import { FETCH_RECIPES_FAILURE, FETCH_RECIPES_SUCCESS, SET_LOADING, SELECTED_RECIPE, SEARCH_RECIPE, BACK_HOME } from './recipeTypes';

const initialState = {
    loading: true,
    recipes: [],
    error: '',
};

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case BACK_HOME:
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
                loading: false,
                recipes: action.payload,
                error: '',
            };
        case FETCH_RECIPES_FAILURE:
            return {
                loading: false,
                recipes: [],
                error: action.payload,
            };
        case SEARCH_RECIPE:
            return {
                loading: true,
                recipes: state.recipes,
                error: '',
            };
        default:
            return state;
    }
};

export default recipeReducer;
