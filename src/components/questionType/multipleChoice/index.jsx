import React from "react";

import { Box, Card, TextField, Divider, Checkbox } from "@material-ui/core/";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import Styles from "./styles";

class multipleChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.questionId,
      title: "",
      type: "multiplechoice",
      required: false,
      choices: [{}],
    };

    this.addQuestion = this.addQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);

    this.generateJson = this.generateJson.bind(this);
    this.removeEntireQuestion = this.removeEntireQuestion.bind(this);
  }

  addQuestion() {
    this.setState({
      choices: [...this.state.choices, ""],
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

    array[componentID] = text;

    this.setState({
      choices: array,
    });
  }

  handleTitle(event) {
    let titlee = event.target.value;
    this.setState({
      title: titlee,
    });
    this.generateJson();
  }

  generateJson() {
    let title = this.state.title;
    let type = this.state.type;
    let choices = this.state.choices;
    let questionId = this.state.questionId;
    let required = this.state.required;

    let json = { title, type, required, choices, questionId };
    return json;
  }

  removeEntireQuestion() {
    this.props.removeQuestion(this.state.questionId);
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
            key={this.props.questionId}
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
        {this.props.sendJson(this.generateJson())}
      </Card>
    );
  }
}
export default multipleChoice;
