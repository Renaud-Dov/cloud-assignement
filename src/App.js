import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import Header from "./components/Header";

// import Header from "./components/Header";

function NoMatch() {
    return <h2>404</h2>
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;
