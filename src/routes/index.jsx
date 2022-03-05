import {
    Route,
    Routes
} from 'react-router-dom';

import Home from "@/containers/Home";
import Details from "@/containers/Details";
import Abilities from "@/containers/Abilities";

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