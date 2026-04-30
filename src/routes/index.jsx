import {
    Route,
    redirect,
    Routes
} from 'react-router-dom';

import Home from "../pages/Home";
import Details from "../pages/Details";
import Abilities from "../pages/Abilities";

const Index = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Details />} />
            <Route path='/abilities' element={<Abilities />} />
        </Routes>
    )
}

export default Index