import React from "react";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import Button from '@material-ui/core/Button';

import "./styles.css";

const headerStyle = {
    width: "100%",
    height: "60px",
    backgroundColor:"#558BAE",
    justifyContent: "center",
    alignItens : "center"
}

const textField = {
    marginBottom:"20px", 
    width: "80%",
}

const buttonStyle = {
    backgroundColor:"transparent",
    width:"200px",
    color:"white",
    float: "left",
    marginLeft :"30px"
}


export default function Login() {
    return (
        <Box style={headerStyle}>

            <Button style={buttonStyle}>Criar Questionário</Button>

            <Button style={buttonStyle}>Visualizar Pesquisa</Button>

            {/* <Box className="left-side-login"></Box>

            <Box className="rigth-side-login">
                <Card className="login-card" style={{ backgroundColor: "#EEEEEE", borderRadius: "20px" }}>

                    <UserIcon style={styleIcon}/>

                    <TextField
                        label="E-mail"
                        type="text"
                        style={textField}
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        style={textField}
                    />

                    <Button
                        style={buttonStyle}
                    >Logar</Button>


                </Card>
            </Box> */}
        </Box>
    )
}