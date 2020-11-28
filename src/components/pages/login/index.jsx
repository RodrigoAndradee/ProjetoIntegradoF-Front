import React from "react";

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import Button from '@material-ui/core/Button';

import Styles from "./styles";


export default function Login() {
    return (
        <Box>
            <Box style={Styles.leftSideLogin} />

            <Box style={Styles.rightSideLogin}>
                <Card style={Styles.loginCard}>

                    <UserIcon style={Styles.styleIcon} />

                    <TextField
                        label="E-mail"
                        type="text"
                        style={Styles.textField}
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        style={Styles.textField}
                    />

                    <Button style={Styles.buttonStyle} >Logar</Button>

                </Card>
            </Box>
        </Box>
    )
}