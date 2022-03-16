import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
