import React from 'react';
import { Link } from 'react-router-dom';
import ClockIcon from './clock.svg';

const Recipe = ({ recipe: { id, title, time, difficulty, images } }) => {
    return (
        <div className="bg-white m-3 rounded-lg p-2">
            <Link to={`/recipe/${id}`} state={{ image: images[0] }}>
                <div className="relative">
                    <div className="absolute text-sm px-2 py-1 top-1 left-1 rounded-full bg-color-secondary text-color-secondary inline-flex">
                        <img src={ClockIcon} alt="clock" width={16} className="mr-1" />
                        <span>{time}</span>
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
