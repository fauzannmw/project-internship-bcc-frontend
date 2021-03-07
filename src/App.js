import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginGateaway from "./pages/Login/LoginGateaway";
import LoginMentee from "./pages/Login/LoginMentee";
import LoginMentor from "./pages/Login/LoginMentor";
import RegisterGateaway from "./pages/Register/RegisterGateaway";
import RegisterMentee from "./pages/Register/Register Mentee/RegisterMentee";
import RegisterMentor from "./pages/Register/Register Mentor/RegisterMentor";
import Home from "./pages/Home/Home";
import AboutUs from './pages/About Us/AboutUs';
import Explore from './pages/Explore/Explore';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/explore" component={Explore} />
        <Route path="/sign-up" component={RegisterGateaway} />
        <Route path="/register-mentee" component={RegisterMentee} />
        <Route path="/register-mentor" component={RegisterMentor} />
        <Route path="/sign-in" component={LoginGateaway} />
        <Route path="/login-mentee" component={LoginMentee} />
        <Route path="/login-mentor" component={LoginMentor} />
      </Switch>
    </Router>
  );
}

export default App;
