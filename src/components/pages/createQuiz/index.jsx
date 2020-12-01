import React, { useState } from "react";

import { Box, Divider, Card, TextField, Button, Select } from '@material-ui/core'

import Header from '../../header';

import MultipleChoice from '../../questionType/multipleChoice'
import Text from '../../questionType/multipleChoice'

import Styles from "./styles";

export default () => {

    const [quiz, setQuestion] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [questionToRender, setQuestionToRender] = useState([]);
    const [questionId, setQuestionId] = useState(0);
    const [showHint, setShowHint] = useState(true);


    const getComponent = {
        multipleChoice: <MultipleChoice questionId={questionId} />,
        text: <Text questionId={questionId} />
    }

    const handleChangeTitle = event => {
        setTitle(event.target.value)
    }

    const handleChangeDescription = event => {
        setDescription(event.target.value)
    }
    const addQuestion = typeQuestion => {

        const typeOf = getComponent[typeQuestion]

        console.log(typeQuestion)

        setQuestionToRender(questionToRender.concat(typeOf))
        setQuestionId(questionId + 1)
        setShowHint(false)

    };

    const removeQuestion = questionId => {

    }

    const renderQuestions = () => <ol>
        {
            questionToRender.map(questions => <div>{questions}</div>)
        }
    </ol>

    return (
        <>
            <Header />

            <Box style={Styles.mainCreateQuiz}>

                <h1>Criação de Pesquisas</h1>

                <Divider />

                <Box style={Styles.boxCreateQuiz}>
                    <Card style={Styles.cardQuiz}>

                        <Box style={Styles.formTitle}>
                            <TextField
                                label="Título da Pesquisa"
                                type="text"
                                style={Styles.textField}
                                onChange={handleChangeTitle}
                            />

                            <TextField
                                label="Descrição da Pesquisa"
                                type="text"
                                style={Styles.textField}
                                onChange={handleChangeDescription}
                            />
                        </Box>

                        <Box style={Styles.formContent}>
                            {
                                showHint
                                    ?
                                    <h2>Adicione alguma pergunta</h2>
                                    :
                                    renderQuestions()
                            }
                        </Box>

                    </Card>

                    <Card style={Styles.cardButtons}>
                        <Button style={Styles.creteButton} onClick={() => addQuestion("multipleChoice")}>Multipla Escolha</Button>

                        <Button style={Styles.creteButton} onClick={() => addQuestion("text")}>Texto</Button>
                    </Card>
                </Box>
            </Box>
        </>
    )
}