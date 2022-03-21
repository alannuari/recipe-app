const Loading = () => {
    return (
        <div className="bg-black/25 w-full min-h-screen flex justify-center items-center flex-col pt-20 absolute left-0 top-0">
            <div className="animate-ping bg-color-primary rounded-full border-4 h-12 w-12 mb-8"></div>
            <h2 className="text-center text-color-secondary text-xl font-semibold">Loading...</h2>
        </div>
    );
};

export default Loading;
