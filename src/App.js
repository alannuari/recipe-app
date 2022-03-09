import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import RecipeDetail from './RecipeDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
