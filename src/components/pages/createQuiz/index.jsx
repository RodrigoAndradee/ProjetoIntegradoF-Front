import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import { Box, Divider, Card, TextField, Button } from "@material-ui/core";

import Header from "../../header";

import MultipleChoice from "../../questionType/multipleChoice";
import Text from "../../questionType/text";

import Styles from "./styles";

export default () => {
  const URL = "http://localhost:3000";

  const history = useHistory();

  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questionToRender, setQuestionToRender] = useState([]);
  const [questionId, setQuestionId] = useState(0);
  const [showHint, setShowHint] = useState(true);

  const getJson = (param) => {
    !questions.includes(param)
      ? setQuestions(questions.concat(param))
      : setQuestions(
          questions.map((item) =>
            item.questionId === param.questionId ? param : item
          )
        );
  };

  const removeQuestion = (questionId) => {
    setQuestions(questions.filter((item) => item.questionId !== questionId));
    setQuestionToRender(
      questionToRender.filter((item) => item.props.questionId !== questionId)
    );

    if (questionToRender.length) setShowHint(true);
  };

  const getComponent = {
    multipleChoice: (
      <MultipleChoice
        sendJson={getJson}
        questionId={questionId}
        removeQuestion={removeQuestion}
        key={questionId}
      />
    ),
    text: (
      <Text
        sendJson={getJson}
        questionId={questionId}
        removeQuestion={removeQuestion}
        key={questionId}
      />
    ),
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const addQuestion = (typeQuestion) => {
    const typeOf = getComponent[typeQuestion];

    setQuestionToRender(questionToRender.concat(typeOf));
    setQuestionId(questionId + 1);
    setShowHint(false);
  };

  const renderQuestions = () => (
    <>
      {questionToRender.map((questions) => (
        <div>{questions}</div>
      ))}
    </>
  );
  const sendForm = () => {
    let token = localStorage.getItem("token");
    axios
      .post(URL + "/research", {
        title,
        description,
        asks: questions,
        userId: token,
        participants: [
          "rodrigomachado161@gmail.com",
          "rodrigo_machado96@hotmail.com",
          "gabriel.talles00@gmail.com",
          "nicolaubalbino@gmail.com",
        ],
        endDate: "22/11/2020",
        active: true,
      })
      .then(function (response) {
        history.push("/consult-quiz");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
              {showHint ? <h2>Adicione alguma pergunta</h2> : renderQuestions()}
            </Box>
          </Card>
          <Box style={Styles.buttonBox}>
            <Card style={Styles.cardButtons}>
              <Button
                style={Styles.createButton}
                onClick={() => addQuestion("multipleChoice")}
              >
                Multipla Escolha
              </Button>
              <Button
                style={Styles.createButton}
                onClick={() => addQuestion("text")}
              >
                Texto
              </Button>
            </Card>
            <Card style={Styles.sendCard}>
              <Button onClick={() => sendForm()} style={Styles.sendButton}>
                Enviar Formulário
              </Button>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};
