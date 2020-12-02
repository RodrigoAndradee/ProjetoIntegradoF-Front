import React, { useState } from "react";

import {
  Box,
  Card,
  Button,
  TextField,
  Divider,
  Checkbox,
} from "@material-ui/core/";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Styles from "./styles";

class multipleChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      questionId: this.props.questionId,
      question: "",
      type: "multiplechoice",
      required: false,
      choices: [{}],
    };

    this.showMenu = this.showMenu.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.generateJson = this.generateJson.bind(this);
    this.removeEntireQuestion = this.removeEntireQuestion.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    if (this.state.showMenu == true) {
      this.setState({
        showMenu: false,
      });
    } else {
      this.setState({
        showMenu: true,
      });
    }
  }

  addQuestion() {
    this.setState({
      choices: [
        ...this.state.choices,
        {
          text: "",
        },
      ],
    });
  }

  removeQuestion(component) {
    this.setState({
      choices: this.state.choices.filter((item) => item !== component),
    });
  }

  handleChange(event, componentID) {
    let text = event.target.value;
    let array = this.state.choices;

    array[componentID].text = text;

    this.setState({
      questions: array,
    });
  }

  handleTitle(event) {
    let title = event.target.value;

    this.setState({
      question: title,
    });
  }

  handleCheck(event) {
    let check = event.target.checked;

    this.setState({
      required: check,
    });
  }

  generateJson() {
    let question = this.state.question;
    let type = this.state.type;
    let choices = this.state.choices;
    let questionId = this.state.questionId;
    let required = this.state.required;

    let json = { question, type, required, choices, questionId };
    return json;
  }

  removeEntireQuestion() {
    {
      this.props.removeQuestion(this.state.questionId);
    }
  }

  render() {
    return (
      <Card style={Styles.multipleChoiceCard}>
        <Box style={Styles.multipleChoiceTitle}>
          <TextField
            label="Título da Pergunta"
            type="text"
            onChange={(e) => this.handleTitle(e)}
            style={Styles.textField}
          />
        </Box>

        <Divider />

        <Box>
          <>
            {this.state.choices.map((componentes, index) => (
              <>
                <Box style={Styles.multipleChoiceContainer}>
                  <Checkbox key={index} />
                  <TextField
                    label="Digite sua opção"
                    type="text"
                    onChange={(e) => this.handleChange(e, index)}
                    key={index}
                    style={Styles.textFieldChoice}
                  />
                  <DeleteForeverIcon
                    onClick={(e) => this.removeQuestion(componentes)}
                    key={index}
                  />
                </Box>
                <Divider key={index} />
              </>
            ))}

            <Box onClick={this.addQuestion} style={Styles.addQuestionButton}>
              <AddCircleIcon />
              <h5>Clique para adicionar alternativa</h5>
            </Box>
          </>
        </Box>
      </Card>
    );
  }
}
export default multipleChoice;
