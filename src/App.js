import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./components/pages/login"
import HomeScreen from "./components/pages/homeScreen"
import CreateQuiz from "./components/pages/createQuiz/index";
import ConsultQuiz from "./components/pages/consultQuiz";
import RegisterScreen from "./components/pages/cadastro";

import * as ROUTES from '../src/util/routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={Login} />

        <Route path={ROUTES.WELCOME} component={HomeScreen} />
        <Route path={ROUTES.CREATEQUIZ} component={CreateQuiz} />
        <Route path={ROUTES.CONSULTQUIZ} component={ConsultQuiz} />
        <Route path={ROUTES.REGISTER} component={RegisterScreen} />

      </Switch>
    </Router >
  );
}

export default App;
