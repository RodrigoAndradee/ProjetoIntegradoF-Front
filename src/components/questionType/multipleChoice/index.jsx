import React, { useState } from "react";

import { Box, Card, Button, TextField } from '@material-ui/core/';

import Styles from "./styles";

export default ({ questionId }) => {

    const [choices, setChoices] = useState([]);

    function handleChangeTitle(event) {
        this.setState({
            question: event.target.value
        })
    }

    function handleChange(event) {

    }

    function addQuestion() {
        // choices.push("teste")
        setChoices(...choices, 'teste')
        // this.setState({
        //     choices: [...this.state.choices, {
        //         text: '',
        //     }],
        // })
    }

    return (
        <Box>
            <Card style={Styles.multipleChoiceCard}>

                <TextField
                    label="Título da Pergunta"
                    type="text"
                    variant="filled"
                    onChange={handleChangeTitle}
                />

                <Box>
                    {
                        choices.map(choices =>
                            <Box>
                                <Button> Remove </Button>

                                <TextField
                                    label="Digite sua alternativa"
                                    type="text"
                                    // variant="filled"
                                    onChange={handleChange}
                                />
                            </Box>
                        )
                    }
                </Box>

                <Box onClick={addQuestion}>
                    Clique aqui para adicionar alternativas
                </Box>

            </Card>
        </Box>
    )
}