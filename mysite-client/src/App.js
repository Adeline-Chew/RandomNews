import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Logout from "./pages/auth/Logout";
import Dashboard from "./pages/app/Dashboard";
import SignIn from "./pages/auth/Signin";
import Register from "./pages/auth/Register";

const App = () => {
    return (
        <div className="App">
            <Router>
                {/* <Navbar/> */}
                <Switch>
                    <Route path='/signin' component={SignIn} exact />
                    <Route path='/register' component={Register} exact />
                    <Route path='/logout' component={Logout} exact />
                    <Route path='/dashboard' component={Dashboard} exact />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
