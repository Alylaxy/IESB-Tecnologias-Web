import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/signin/index-signin";
import { SignUp } from "../pages/signup/index-signup";
import { Home } from "../pages/home/index-home";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const {signed} = useAuth();
    
    return signed > 0 ? <Item /> : <Home />;
};

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/signin" element={<SignIn/>}/>
                    <Route exact path="/signup" element={<SignUp/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;