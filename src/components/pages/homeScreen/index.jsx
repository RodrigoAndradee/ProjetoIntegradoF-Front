import React from "react";

import Box from '@material-ui/core/Box';

import Header from '../../header'

import Styles from "./styles";

export default function homeScreen() {
    return (
        <Box style={Styles.homeScreen}>

            <Header />

            <h1>Bem-vindo, Rodrigo Andrade</h1>

            <span />

        </Box>
    )
}