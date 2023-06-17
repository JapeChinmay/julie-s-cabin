import { Fragment } from "react";
import Welcome from "./Components/Welcome/Welcome";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Authentication/LoginForm/LoginForm";
import Signupform from "./Components/Authentication/SignupForm/Signupform";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="signup" element={<Signupform />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
