import React from "react";

import { Box, Card, TextField, Button } from '@material-ui/core/';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';

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