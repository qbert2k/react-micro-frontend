import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

import "./index.scss";
import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";

const App = () => {
    const [loading, setLoading] = useState(true);
    return <div className="border-4 border-red-700">
        <Routes>
            <Route path="/" element={<ProductLists loading={loading} setLoading={setLoading}/>}/>
            <Route path=":productId" element={<ProductPage/>}/>
        </Routes>
    </div>
};

export default App;
