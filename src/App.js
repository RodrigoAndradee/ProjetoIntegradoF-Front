import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./components/pages/login"
import HomeScreen from "./components/pages/homeScreen"
import CreateQuiz from "./components/pages/createQuiz/index";
import ConsultQuiz from "./components/pages/consultQuiz";
import RegisterScreen from "./components/pages/cadastro";

import * as ROUTES from '../src/util/routes';
import PrivateRoute from "./components/privateRoute";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={Login} />
        <Route path={ROUTES.REGISTER} component={RegisterScreen} />

        <PrivateRoute path={ROUTES.WELCOME} component={HomeScreen} />
        <PrivateRoute path={ROUTES.CREATEQUIZ} component={CreateQuiz} />
        <PrivateRoute path={ROUTES.CONSULTQUIZ} component={ConsultQuiz} />

      </Switch>
    </Router >
  );
}

export default App;
