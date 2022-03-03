import {
    Route,
    Routes
} from 'react-router-dom';

import Home from "@/containers/Home";
import Details from "@/containers/Details";

const Index = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Details />} />
        </Routes>
    )
}

export default Index