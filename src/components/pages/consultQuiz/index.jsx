import React, { useEffect, useState } from "react";

import axios from "axios";

import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { DataGrid } from "@material-ui/data-grid";

import Header from "../../header";

import Styles from "./styles";

export default function ConsultQuiz() {
  const URL = "http://localhost:3000";

  const [allTasks, setAllTasks] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "taskTitle", headerName: "Título da Pesquisa", width: 250 },
    {
      field: "taskDescription",
      headerName: "Descrição da Pesquisa",
      width: 300,
    },
    {
      field: "qtdParticipants",
      headerName: "Qtd Participantes",
      width: 250,
    },
    {
      field: "qtdResponses",
      headerName: "Qtd Respostas",
      width: 250,
    },
  ];

  const rows = [];

  const renderTable = () => {
    let id = 0;
    for (let index = 0; index < allTasks.length; index++) {
      id++;
      rows.push({
        id,
        taskTitle: allTasks[index].title,
        taskDescription: allTasks[index].description,
        qtdParticipants: allTasks[index].participants.length,
        qtdResponses: 0,
      });
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    let url = URL + "/research?userId=" + token;

    console.log(token);

    axios
      .get(url, {})
      .then(function (response) {
        setAllTasks(response.data.body);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {renderTable()}
      <Header />

      <Box style={Styles.homeScreen}>
        <h1>Visualizar Pesquisas</h1>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
      <Divider style={Styles.deviderStyle} />
    </>
  );
}
