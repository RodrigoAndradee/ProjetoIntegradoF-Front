import React from "react";

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Header from '../../header';

import Styles from "./styles";

export default function homeScreen() {
    return (
        <>
            <Header />

            <Box style={Styles.homeScreen}>

                <h1>Bem-vindo, Rodrigo Andrade!</h1>

            </Box>

            <Divider style={Styles.deviderStyle} />
        </>
    )
}