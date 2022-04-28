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
import Signup from "./components/Signup";
import {getToken,setToken, RequireAuth} from "./auth";
import Repair from "./components/Repair";

// import Header from "./components/Header";

function App() {
    const token = getToken();
    console.log(token);
    return (
        <div className="App">
            <Header token={token}/>
            <Routes>
                <Route path="/">
                    <Route index element={<Products/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="product/:id" element={<Product/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                    <Route path="faq" element={<FAQ/>}/>
                    <Route path="repair" element={<Repair/>}/>

                    <Route path={"dashboard"} element={
                        <RequireAuth token={token}>
                        </RequireAuth>
                    }/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
