import React, {useState,useEffect} from "react";

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Header from '../../header';

import Styles from "./styles";

export default function HomeScreen() {
    const [name,setName] = useState("")
    useEffect(()=>{
        setName(localStorage.getItem('name'))
    })
    return (
        <>
            <Header />

            <Box style={Styles.homeScreen}>

                <h1>Bem-vindo, {name}!</h1>

            </Box>

            <Divider style={Styles.deviderStyle} />
        </>
    )
}