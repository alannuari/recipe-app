import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { connect } from 'react-redux';
import { fetchRecipeDetail } from '../redux/recipe/recipeActions';

const RecipeDetail = ({ recipeData: { recipe, loading, error }, fetchRecipeDetail }) => {
    const { id } = useParams();
    const location = useLocation();
    const { image } = location.state;

    useEffect(() => {
        fetchRecipeDetail(id);
    }, [id, fetchRecipeDetail]);

    return (
        <div className="bg-slate-100 min-h-screen py-8 px-2">
            <div className="mx-auto w-full max-w-2xl">
                {loading ? (
                    <Loading />
                ) : (
                    <div className="relative">
                        <Link to="/" className="px-3 py-2 bg-sky-600 hover:bg-sky-700 sticky top-2 left-0 rounded-xl text-white shadow">
                            Kembali
                        </Link>
                        <div className="w-full flex justify-center">
                            <img src={image} alt={id} className="rounded-lg shadow" />
                        </div>
                        <div className="py-3">
                            <h1 className="font-bold text-2xl">{recipe.recipeTitle}</h1>
                            <div className="flex items-center">
                                <p>Durasi : {recipe.recipeInfo.time}</p>
                            </div>
                        </div>

                        {recipe.ingredients.map((ingredient) => {
                            return (
                                <div key={ingredient.title} className="py-3">
                                    <h1 className="font-bold text-xl mb-1 capitalize">{ingredient.title}</h1>
                                    <div>
                                        {ingredient.items.map((item, idx) => {
                                            return (
                                                <li key={idx} className="px-2">
                                                    <span className="capitalize">{item.item} | </span>
                                                    <span className="text-color-primary">{item.qty}</span>
                                                </li>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                        <div className="py-3">
                            <h1 className="font-bold text-xl mb-1">Langkah - Langkah</h1>
                            {recipe.steps.map((step) => {
                                return (
                                    <div key={step.num} className="px-2 mb-1">
                                        <span>{step.num}. </span>
                                        <span>{step.step}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                {error && <div className="text-slate-400">{error}</div>}
            </div>
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
        fetchRecipeDetail: (id) => dispatch(fetchRecipeDetail(id))
    };
};

export default connect(mapToStateProps, mapToDispatchProps)(RecipeDetail);
