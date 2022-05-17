import React from 'react';
import { BallTriangle } from  'react-loader-spinner'

const Loading = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center flex-col pt-20 absolute left-0 top-0">
            <BallTriangle color="blue" height={80} width={80} />
            <h2 className="text-center text-color-secondary text-xl font-semibold mt-6">Loading...</h2>
        </div>
    );
};

export default Loading;
