import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import Product from "./components/Product";
import FAQ from "./components/FAQ";
import Login from "./components/Login";

// import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="products/:id" element={<Product/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                    <Route path="faq" element={<FAQ/>}/>
                    <Route path="login" element={<Login/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
