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
    const iframe ='<iframe width="100%" height="860" src="https://datastudio.google.com/embed/reporting/e13f1a45-ac7e-45ca-8657-59b003199a32/page/C4hBB" frameborder="0" style="border:0" allowfullscreen></iframe>';
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
    return (
        <>
            <Header />

            <Box style={Styles.homeScreen}>

                <h1>Bem-vindo, {name}!</h1>

            </Box>

            <Divider style={Styles.deviderStyle} />
            <Box style={Styles.boxIframe}>
            <Iframe iframe={iframe} />
            </Box>
        </>
    )
}