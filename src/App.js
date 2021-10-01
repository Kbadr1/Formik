import "./App.css";
import LoginForm from "./components/login/LoginForm";
import SignupForm from "./components/signup/SignupForm";
import HomePage from "./components/home/Home";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Box component="div" className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
