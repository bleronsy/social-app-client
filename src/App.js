import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import { AuthContext } from "./context/auth";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";

function App() {
  const context = useContext(AuthContext);
  // const navigate = useNavigate();

  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login"
              element={<LoginWrapper />}
            />
            <Route
              path="/register"
              element={<RegisterWrapper />}
            />
            <Route path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

function LoginWrapper() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/" /> : <Login />;
}

function RegisterWrapper() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/" /> : <Register />;
}

export default App;
