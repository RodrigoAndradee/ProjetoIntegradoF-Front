import React from "react";
import { useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Styles from "./styles";


export default function Header() {

    const history = useHistory();

    function ClickButton(param) {
        history.push(param)
    }
    return (
        <Box style={Styles.headerStyle}>

            <Button style={Styles.buttonStyle} onClick={() => ClickButton("create-quiz")}>Criar Questionário</Button>

            <Button style={Styles.buttonStyle} onClick={() => ClickButton("consult-quiz")}>Visualizar Pesquisa</Button>

        </Box>
    )
}