import React from "react";

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Styles from "./styles";



export default function Login() {
    return (
        <Box style={Styles.headerStyle}>

            <Button style={Styles.buttonStyle} >Criar Questionário</Button>

            <Button style={Styles.buttonStyle}>Visualizar Pesquisa</Button>

            
        </Box>
    )
}