import React, { useState } from "react";

import { Box, Card, TextField, Button } from "@material-ui/core/";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";

import { useHistory } from "react-router-dom";
import axios from "axios";

import Styles from "./styles";
import Alert from "@material-ui/lab/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fail, setFail] = useState(false)
  const [success, setSuccess] = useState(false)

  const URL = "http://localhost:3000";
  const history = useHistory();

  const verifyLogin = () => {
    axios
      .post(URL + "/login", {
        email,
        password,
      })
      .then(function (response) {
        setSuccess(true);
        let decode = JSON.stringify(response.data);
        let a = JSON.parse(decode);
        console.log(a.accessToken);
        console.log(decode);
        localStorage.setItem("token", a.accessToken);
        localStorage.setItem("name", a.name);
        setTimeout(() => {
          setSuccess(false);
          history.push("/home");
        }, 500);
      })
      .catch(function (error) {
        console.log(error);
        setFail(true)
        setTimeout(() => setFail(false), 2000);
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

  return (
    <>
      <Box style={Styles.leftSideLogin} >
        <img style={Styles.img} src={"https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/02/7-Melhores-Plugins-de-Formulario-de-Contato-WordPress-.png"} alt={""}/>
      </Box>

      <Box style={Styles.rightSideLogin}>

        <h1 style={Styles.textHeader}> Bem vindo ao Input Form</h1>
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
          {success && <Alert severity="success">Logando</Alert>}

          {fail && <Alert severity="error">Algum erro ocorreu, Tente novamente</Alert>}

        </Card>
      </Box>
    </>
  );
}
