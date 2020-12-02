import React, { useState } from "react";

import { Box, Card, Button, TextField } from '@material-ui/core/';

import Styles from "./styles";

export default ({ questionId }) => {

    const [choices,setChoices] = useState([]);
    const [choicesToRender, setChoicesToRender] = useState(0);

    function handleChangeTitle(event) {
        this.setState({
            question: event.target.value
        })
    }

    function handleChange(event) {

    }

    function addQuestion() {

        setChoices(...choices, questionId)

        console.log(choices)

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
                
                    {
                        choices.map((c) => 
                            < div className="question-component" >
                                {/* <button onClick={(e) => removeQuestion(componentes)} className="remove-alternative" title="excluir"></button>
                                <input type="radio" id="my_textbox" />
                                <input type="text" placeholder="Digite sua opção" onChange={(e) => handleChange(e, index)} /> */}
                                <a>{c}</a> 
                                OLAtr   
                            </div>
                        )
                    }
                    
                <Box onClick={addQuestion}>
                    Clique aqui para adicionar alternativas
                </Box>

            </Card>
        </Box>
    )
}