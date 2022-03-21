import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Loading from './Loading';
import Recipe from './Recipe';
import SearchIcon from '../assets/search.svg';
import { connect } from 'react-redux';
import { fetchRecipes, fetchSearchRecipes, searchRecipe, setLoading } from '../redux/recipe/recipeActions';

const Home = ({ recipeData, fetchRecipes, fetchSearchRecipes, setLoading, searchRecipe }) => {
    const [search, setSearch] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [textRecipe, setTextRecipe] = useState('Resep Terbaru :');

    useEffect(() => {
        if (searchQuery === '') {
            setTextRecipe('Resep Terbaru :');
            setLoading();
            fetchRecipes();
        } else {
            setTextRecipe(`Hasil Pencarian Resep : '${searchQuery}'`);
            searchRecipe();
            fetchSearchRecipes(searchQuery);
        }
    }, [searchQuery, fetchRecipes, fetchSearchRecipes, setLoading, searchRecipe]);

    return (
        <div className="min-h-screen bg-slate-200 relative">
            <div className="px-2 sm:pt-8 pt-4 pb-12 flex items-center flex-col">
                <h1 className="text-3xl font-bold sm:mb-6 mb-3">Recipe App</h1>
                <div className="flex max-w-md w-full bg-color-primary px-4 p-1 sm:py-2 rounded-full mb-6">
                    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Cari Resep Masakan" className="flex-1 bg-transparent sm:px-4 outline-none mr-4 text-white font-700" />
                    <img onClick={() => setSearchQuery(search)} src={SearchIcon} alt="search" width={35} className="cursor-pointer hover:bg-white p-1 rounded" />
                </div>
                <div className="flex text-2xl text-left px-4 text-color-primary">
                    <h1 className="max-w-4xl">{textRecipe}</h1>
                </div>
                {recipeData.loading ? (
                    <Loading />
                ) : recipeData.error ? (
                    <div className="text-slate-400 py-3">{recipeData.error}</div>
                ) : recipeData.recipes.data.length === 0 ? (
                    <div className="text-slate-400 py-3">Maaf, tidak ada data yang bisa ditampilkan!</div>
                ) : (
                    <div className="flex flex-wrap justify-center items-center sm:pt-6 pt-3 pb-6 ">
                        {recipeData.recipes.data.map((recipe) => (
                            <Recipe recipe={recipe} key={recipe.id} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

const mapToStateProps = (state) => {
    return {
        recipeData: state,
    };
};

const mapToDispatchProps = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes()),
        fetchSearchRecipes: (query) => dispatch(fetchSearchRecipes(query)),
        searchRecipe: () => dispatch(searchRecipe()),
        setLoading: () => dispatch(setLoading()),
    };
};

export default connect(mapToStateProps, mapToDispatchProps)(Home);
