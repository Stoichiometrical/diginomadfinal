import Home from "./pages/home/Home";
import Continent from "./pages/continent/Continent";
import Country from "./pages/country/Country";
import About from "./pages/about/About";
import { HashRouter as Router , Routes , Route } from "react-router-dom"


export default function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path="" element={ <Home/> }/>
                    <Route exact path="/home" element={ <Home/> }/>
                    <Route exact path="/continent" element={ <Continent/> }/>
                    {/*<Route path="/continent">*/}
                    {/*    <Route path="/africa" element={<Country/>}/>*/}
                    {/*    <Route path="/europe" element={<Country/>}/>*/}
                    {/*    <Route path="/asia" element={<Country/>}/>*/}
                    {/*    <Route path="/namerica" element={<Country/>}/>*/}
                    {/*</Route>*/}
                    <Route path="/country" element={ <Country/> }/>/>
                    <Route path="/about" element={ <About/> }/>

                </Routes>
            </Router>
        </>

    )
}