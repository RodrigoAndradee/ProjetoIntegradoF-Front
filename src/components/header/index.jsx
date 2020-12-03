import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { Box, Button, Avatar } from "@material-ui/core/";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Styles from "./styles";

export default function Header() {
  const history = useHistory();

  const [name, setName] = useState("");

  function ClickButton(param) {
    history.push(param);
  }

  useEffect(() => {
    setName(
      localStorage.getItem("name") === null ? "" : localStorage.getItem("name")
    );
  }, []);

  function Logout() {
    localStorage.clear();
    history.push("");
  }

  return (
    <Box style={Styles.headerStyle}>
      <Button
        style={Styles.buttonStyle}
        onClick={() => ClickButton("create-quiz")}
      >
        Criar Questionário
      </Button>

      <Button
        style={Styles.buttonStyle}
        onClick={() => ClickButton("consult-quiz")}
      >
        Visualizar Pesquisa
      </Button>

      <Box style={Styles.boxR}>
        <Avatar alt="Remy Sharp" style={Styles.avatar}>
          {name.slice(0, 1).toUpperCase()}
        </Avatar>
        <ExitToAppIcon style={Styles.exitIcon} onClick={Logout} />
      </Box>
    </Box>
  );
}
