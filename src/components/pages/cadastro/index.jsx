import React, {useState} from "react";

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Alert from '@material-ui/lab/Alert';
import Styles from "./styles";
import {Button, Card, TextField} from "@material-ui/core/";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default function RegisterScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [fail, setFail] = useState(false)
    const [success, setSuccess] = useState(false)

    const history = useHistory();

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleCpf = (e) => {
        setCpf(e.target.value);
    };

    const URL = "http://localhost:3000";

    const register = () => {
        axios
            .post(URL + "/user", {
                email,
                password,
                name,
                cpf
            })
            .then(function (response) {
                setSuccess(true)
                let decode = JSON.stringify(response.data)
                let a = JSON.parse(decode)
                localStorage.setItem('name', a.body.name);
                localStorage.setItem('token', a.body.accessToken);
                setTimeout(() => {
                    setSuccess(false);
                    history.push("/home");
                }, 500);

            })
            .catch(function (error) {
                console.log(error + "a");
                setFail(true)
                setTimeout(() => setFail(false), 2000);
            });
    };

    return (
        <>

            <Box style={Styles.registerScreen}>

                <h1>Bem-vindo, Ao cadastro do Imput Form</h1>

            </Box>

            <Divider style={Styles.deviderRegisterStyle}/>

            <Box style={Styles.box}>
                <Card style={Styles.loginCard}>

                    <AccountBoxIcon style={Styles.styleIcon}/>

                    <TextField
                        label="E-mail"
                        type="text"
                        style={Styles.textField}
                        onChange={handleEmail}
                    />
                    <TextField
                        label="Nome"
                        type="text"
                        style={Styles.textField}
                        onChange={handleName}
                    />

                    <TextField
                        label="CPF"
                        type="text"
                        style={Styles.textField}
                        onChange={handleCpf}
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        style={Styles.textField}
                        onChange={handlePassword}
                    />


                    <Button style={Styles.buttonStyle} onClick={register}>
                        Cadastrar
                    </Button>
                    {success && <Alert severity="success"> Usuario cadastrado com sucesso</Alert>}

                    {fail && <Alert severity="error">Algum erro ocorreu, Tente novamente</Alert>}

                </Card>

            </Box>

            <Divider style={Styles.deviderRegisterStyle}/>
        </>
    )
}
