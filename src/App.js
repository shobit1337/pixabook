import React, { useState } from "react";
// import AuthModal from "./components/AuthModal";
import AuthProvider from "./contexts/AuthContext";
// import ImageDisplay from "./components/ImageDisplay";
// import ImageUpload from "./components/ImageUpload";
// import Modal from "./components/Modal";
//react-router stuff
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
//pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPass from "./pages/ResetPass";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PublicRoute
              exact
              path="/"
              component={Homepage}
              restricted={false}
            />
            {/* <PrivateRoute
              exact
              path="/update-profile"
              component={UpdateProfile}
            /> */}
            <PublicRoute
              exact
              path="/signup"
              component={Signup}
              restricted={true}
            />
            <PublicRoute
              exact
              path="/login"
              component={Login}
              restricted={true}
            />
            <PublicRoute
              exact
              path="/reset-pass"
              component={ResetPass}
              restricted={true}
            />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
