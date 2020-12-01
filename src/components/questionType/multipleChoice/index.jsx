import React from "react";

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

import Styles from "./styles";

class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeTitle(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <Box>
                <Card style={Styles.multipleChoiceCard}>

                    {this.props.questionId}
                    <TextField
                        label="Título da Pergunta"
                        type="text"
                        style={Styles.textField}
                        variant="filled"
                        onChange={this.handleChangeTitle}
                    />





                </Card>
            </Box>
        )
    }
}

export default MultipleChoice;