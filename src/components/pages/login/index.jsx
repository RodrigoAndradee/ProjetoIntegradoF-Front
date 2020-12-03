import React, { useState } from "react";

import { Box, Card, TextField, Button } from "@material-ui/core/";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";

import { useHistory } from "react-router-dom";
import axios from "axios";

import Styles from "./styles";

export default function Login() {
  // const [isLoged, setIsLoged] = useState(false);
  // const [canLog, setCanLog] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const URL = "http://localhost:3000";
  const history = useHistory();

  const verifyLogin = () => {
    axios
      .post(URL + "/login", {
        email,
        password,
      })
      .then(function (response) {
        history.push("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const callRegister = () => {
          history.push("/cadastro");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // const canLogin = () => {
  //   console.log("entrou");
  //   if (email && password) {
  //     console.log("liberou senha");
  //     setCanLog(false);
  //   }
  // };

  return (
    <>
      <Box style={Styles.leftSideLogin} />

      <Box style={Styles.rightSideLogin}>
        <Card style={Styles.loginCard}>
          <UserIcon style={Styles.styleIcon} />

          <TextField
            label="E-mail"
            type="text"
            style={Styles.textField}
            onChange={handleEmail}
          />

          <TextField
            label="Senha"
            type="password"
            style={Styles.textField}
            onChange={handlePassword}
          />

          {/* {canLogin()} */}

          <Button style={Styles.buttonStyle} onClick={verifyLogin}>
            Logar
          </Button>

          <Button style={Styles.buttonStyle1} onClick={callRegister}>
            Cadastrar
          </Button>

        </Card>
      </Box>
    </>
  );
}
