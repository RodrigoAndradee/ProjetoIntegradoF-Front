import React from "react";

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

import Header from '../../header';

import Styles from "./styles";


export default function createQuiz() {
    return (
        <>
            <Header />

            <Box style={Styles.mainCreateQuiz}>

                <h1>Criação de Pesquisas</h1>

                <Divider />

                <Box style={Styles.cardQuiz}>
                    <Card>
                        <TextField
                            label="Senha"
                            type="password"
                            style={Styles.textField}
                        />
                    </Card>
                </Box>
            </Box>
        </>
    )
}