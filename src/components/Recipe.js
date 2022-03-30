import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClockIcon from '../assets/clock.svg';
import { selectedRecipe } from '../redux/recipe/recipeActions';

const Recipe = ({ recipe: { id, title, time, images }, selectedRecipe }) => {
    return (
        <div className="bg-white m-3 rounded-lg p-2 w-64 shadow">
            <div className="text-sm px-2 py-1 text-color-secondary inline-flex">
                <img src={ClockIcon} alt="clock" width={16} className="mr-1" />
                <span>{time}</span>
            </div>
            <img src={images[0]} alt={id} className="rounded-lg mx-auto" />
            <Link to={`/recipe/${id}`} state={{ image: images[0] }} onClick={() => selectedRecipe()}>
                <div className="bg-black/60 p-3 w-full text-sm sm:text-base text-white font-bold rounded-lg my-2">
                    <h1 className="truncate">{title}</h1>
                </div>
            </Link>
        </div>
    );
};

const mapToDispatchProps = (dispatch) => {
    return {
        selectedRecipe: () => dispatch(selectedRecipe()),
    };
};

export default connect(null, mapToDispatchProps)(Recipe);
