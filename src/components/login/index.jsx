import React from "react";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import Button from '@material-ui/core/Button';

import "./styles.css";

const styleIcon = {
    width: "140px",
    height: "140px",
    marginTop: "30px",
    color:"#CDCDCD",
}

const textField = {
    marginBottom:"20px", 
    width: "80%",
}

const buttonStyle = {
    backgroundColor:"#054F77",
    width:"50%",
    color:"white",
    borderRadius:"20px"
}


export default function Login() {
    return (
        <Box>
            <Box className="left-side-login"></Box>

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
            </Box>
        </Box>
    )
}