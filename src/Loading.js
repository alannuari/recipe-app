const Loading = () => {
    return (
        <div className="bg-slate-200 flex justify-center items-center flex-col pt-20">
            <div className="animate-ping bg-color-primary rounded-full border-4 h-12 w-12 mb-8"></div>
            <h2 className="text-center text-color-primary text-xl font-semibold">Loading...</h2>
        </div>
    );
};

export default Loading;
