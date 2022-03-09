import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe: { id, title, time, difficulty, images } }) => {
    return (
        <div className="bg-white m-3 rounded-lg p-2">
            <Link to={`/recipe/${id}`} state={{ image: images[0] }}>
                <div className="relative">
                    <div className="absolute text-xs sm:text-sm px-2 py-0.5 top-1 left-1 rounded-full bg-color-secondary text-color-secondary">
                        <p>{time}</p>
                    </div>
                    <div className="absolute text-xs sm:text-sm px-2 py-0.5 top-8 left-1 rounded-full bg-color-secondary text-color-secondary">
                        <p>{difficulty}</p>
                    </div>
                    <img src={images[0]} alt={id} className="rounded-lg" />
                    <div className="absolute bg-black/60 p-4 bottom-0 w-full text-sm sm:text-lg text-white font-bold rounded-lg">
                        <h1 className="truncate">{title}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Recipe;
