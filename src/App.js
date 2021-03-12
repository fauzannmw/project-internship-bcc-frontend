import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginGateaway from "./pages/Login/LoginGateaway";
import LoginMentee from "./pages/Login/LoginMentee";
import LoginMentor from "./pages/Login/LoginMentor";
import RegisterGateaway from "./pages/Register/RegisterGateaway";
import RegisterMentee from "./pages/Register/Register Mentee/RegisterMentee";
// import RegisterMentor from "./pages/Register/Register Mentor/RegisterMentor";
import RegisterMentor from "./pages/Register/Register Mentor/MultiStepForm";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About Us/AboutUs";
import Explore from "./pages/Explore/Explore";
import DetailMentor from "./pages/Detail Mentor/DetailMentor";
import Payment from "./pages/Payment/Payment";
import TopUp from "./pages/Top Up/TopUp";
import Withdraw from "./pages/Withdraw/Withdraw";
import ProfileMentor from "./pages/Profile/ProfileMentor";
import ProfileMentee from "./pages/Profile/ProfileMentee";
import PrivateRoute from "./config/PrivateRoute";
import { AuthContext } from "./config/Auth";

function App() {
  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  // console.log(authTokens);
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/explore" component={Explore} />
          <Route path="/detail-mentor" component={DetailMentor} />
          <Route path="/payment" component={Payment} />
          <Route path="/top-up" component={TopUp} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/profile-mentor" component={ProfileMentor} />
          <Route path="/profile-mentee" component={ProfileMentee} />
          <Route path="/sign-up" component={RegisterGateaway} />
          <Route path="/register-mentee" component={RegisterMentee} />
          <Route path="/register-mentor" component={RegisterMentor} />
          <Route path="/sign-in" component={LoginGateaway} />
          <Route path="/login-mentee" component={LoginMentee} />
          <Route path="/login-mentor" component={LoginMentor} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
