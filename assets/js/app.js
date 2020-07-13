import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MessagesPage from "./pages/MessagesPage";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AuthActions from "./actions/AuthActions";
import AuthContext from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

require("../css/app.css");

AuthActions.setup();

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(AuthActions.isAuthenticated());
    const NavbarWithRouter = withRouter(Navbar);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <HashRouter>
                <NavbarWithRouter />
                <main className="container pt-5">
                    <Switch>
                        <Route path="/" exact component={HomePage} />                   {/* Peut être privée et non accessible sans connexion, grâce à PrivateRoute */}
                        <PrivateRoute path="/messages" component={MessagesPage} />
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </main>
            </HashRouter>
        </AuthContext.Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
