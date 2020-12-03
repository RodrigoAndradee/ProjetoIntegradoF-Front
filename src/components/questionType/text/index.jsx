import React from "react";

import { Card, TextField } from "@material-ui/core";

import Styles from "./styles";

class multipleChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.questionId,
      title: "",
      type: "simpleanswer",
      required: false,
    };

    this.handleTitle = this.handleTitle.bind(this);
    this.generateJson = this.generateJson.bind(this);
    this.removeEntireQuestion = this.removeEntireQuestion.bind(this);
  }

  handleTitle(event) {
    let title = event.target.value;

    this.setState({
      title: title,
    });
  }

  generateJson() {
    let title = this.state.title;
    let type = this.state.type;
    let questionId = this.state.questionId;
    let required = this.state.required;

    let json = { title, type, required, questionId };
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
        <TextField
          label="Título da Pergunta"
          type="text"
          onChange={(e) => this.handleTitle(e)}
          style={Styles.textField}
          key={this.props.questionId}
        />

        <TextField
          label="A resposta do usuário vai  aqui"
          type="text"
          style={Styles.textFieldBlocked}
          key={this.props.questionId}
          blocked={true}
          variant="filled"
        />
        {this.props.sendJson(this.generateJson())}
      </Card>
    );
  }
}
export default multipleChoice;
