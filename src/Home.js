import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Loading from './Loading';
import Recipe from './Recipe';
import SearchIcon from './search.svg';

const Home = () => {
    const URL = 'https://api-food-recipe.herokuapp.com';
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query === '') {
            setError(null);
            setIsPending(true);
            setRecipes([]);
            getRecipes(URL);
        } else {
            setIsEmpty(false);
            setError(null);
            setIsPending(true);
            setRecipes([]);
            getRecipesSearch(URL, query);
        }
    }, [query]);

    const getRecipes = (URL) => {
        fetch(`${URL}/recipe`)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Maaf, server sedang bermasalah!');
                }
                return res.json();
            })
            .then((resjson) => {
                setRecipes(resjson.data);
                setIsPending(false);
                if (!resjson.data.length) {
                    setIsEmpty(true);
                }
            })
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            });
    };

    const getRecipesSearch = (URL, query) => {
        fetch(`${URL}/search?q=${query}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Maaf, server sedang bermasalah!');
                }
                return res.json();
            })
            .then((resjson) => {
                setRecipes(resjson.data);
                setIsPending(false);
                if (!resjson.data.length) {
                    setIsEmpty(true);
                }
            })
            .catch((e) => {
                setIsPending(false);
                setError(e.message);
            });
    };

    return (
        <div className="min-h-screen bg-slate-200 relative">
            <div className="px-2 pt-8 pb-10 flex items-center flex-col">
                <h1 className="text-3xl font-bold pb-6">Recipe App</h1>
                <div className="flex max-w-md w-full bg-color-primary px-4 p-1 sm:py-2 rounded-full">
                    <input
                        type="text"
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        placeholder="Cari Resep Masakan"
                        className="flex-1 bg-transparent sm:px-4 outline-none mr-4 text-white font-700"
                    />
                    <img
                        onClick={() => {
                            setQuery(search);
                        }}
                        src={SearchIcon}
                        alt="search"
                        width={35}
                        className="cursor-pointer hover:bg-white p-1 rounded"
                    />
                </div>
                {isPending ? (
                    <Loading />
                ) : (
                    <div className="flex flex-wrap justify-center items-center py-6">
                        {recipes.map((recipe) => (
                            <Recipe recipe={recipe} key={recipe.id} />
                        ))}
                    </div>
                )}
                {isEmpty && (
                    <div className="text-slate-400 text-center">
                        <h1>Maaf, data tidak ditemukan!.</h1>
                    </div>
                )}
                {error && <div className="text-slate-400">{error}</div>}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
