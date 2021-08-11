import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/app/Dashboard";
import SignIn from "./pages/auth/Signin";
import Register from "./pages/auth/Register";
import Technology from './pages/app/Technology'
import Entertainment from "./pages/app/Entertainment";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/' component={SignIn} exact />
                    <Route path='/register' component={Register} exact />
                    <Route path='/dashboard' component={Dashboard} exact />
                    <Route path='/technology' component={Technology} exact />
                    <Route path='/entertainment' component={Entertainment} exact/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
