import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import ClockIcon from './clock.svg';

const RecipeDetail = () => {
    const URL = 'https://api-food-recipe.herokuapp.com';
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { image } = location.state;

    useEffect(() => {
        getRecipesDetail(URL, id);
    }, [id]);

    const getRecipesDetail = (URL, id) => {
        fetch(`${URL}/recipe/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Maaf, server sedang bermasalah!');
                }
                return res.json();
            })
            .then((resjson) => {
                setRecipes(resjson.data);
                setIsPending(false);
            })
            .catch((e) => {
                setError(e.message);
            });
    };
    return (
        <div className="bg-slate-200 min-h-screen py-8 px-2">
            <div className="mx-auto w-full max-w-2xl">
                {isPending ? (
                    <Loading />
                ) : (
                    <div className="relative">
                        <Link to="/" className="px-3 py-2 bg-white hover:bg-slate-100 absolute top-2 left-0 rounded-lg text-color-primary">
                            Kembali
                        </Link>
                        <div className="w-full flex justify-center">
                            <img src={image} alt={id} className="rounded-lg" />
                        </div>
                        <div className="py-3">
                            <h1 className="font-bold text-2xl">{recipes.recipeTitle}</h1>
                            <div className="flex items-center">
                                <p>Durasi : </p>
                                <div className="text-sm px-2 py-1 ml-1 top-1 left-1 rounded-full bg-color-secondary text-color-secondary mr-1 inline-flex">
                                    <img src={ClockIcon} alt="clock" width={16} className="mr-1" />
                                    <span>{recipes.recipeInfo.time}</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-3">
                            <h1 className="font-bold text-xl mb-1">{recipes.ingredients[0].title}</h1>
                            <div>
                                {recipes.ingredients[0].items.map((item) => {
                                    return (
                                        <li key={item.item} className="px-2">
                                            <span>{item.item} | </span>
                                            <span className="text-color-primary">{item.qty}</span>
                                        </li>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="py-3">
                            <h1 className="font-bold text-xl mb-1">Langkah - langkah</h1>
                            {recipes.steps.map((step) => {
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

export default RecipeDetail;
