import React  from 'react';
import {useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { Button} from "@mui/material";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Item from '@mui/material/MenuItem';

import { useHistory } from "react-router";

function Question() {

    const [ question, setQuestion ] = useState('');
    const history = useHistory();

    const getQuestion = () => {
        
        axios.get(`http://localhost:8080/v1/question`)
        .then((res) => {
            setQuestion(res.data.reverse())
            //console.log(question)
            //console.log(detail)
            //console.log(answers);
            
        }).catch((error) => {
            console.log(error)
        })
        
    };

    const getId = (id) => {
        localStorage.setItem("questionID",id);
        let path = `../answer`; 
        history.push(path);
    };
    
    

    useEffect(() => {
        getQuestion();
    }, []);

    let data = 
    <Grid container spacing={3}>
        <Grid item xs={12} style={{paddingTop: "2%", marginLeft: "2%"}}>
            <Alert severity="info">
                <AlertTitle>INFORMACION</AlertTitle>
                No hay ninguna pregunta — <strong>agrega una pregunta o comunicate con servicio tecnico</strong>
            </Alert>
        </Grid>
    </Grid>

    if (question.length > 0) {
        data = (
            question.map((ele, index) => {
                return(
                    <Grid item sx={12} style={{paddingTop: '40px'}}>
                        <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#0291bb", backgroundOpac: "100%"}}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {ele.emailUser}
                                </Typography>
                                <Typography variant="h5" component="div">
                                {ele.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                
                                </Typography>
                                <Typography variant="body2">
                                {ele.detail}
                                <br />
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => getId(ele.id)} style={{color: "white"}} size="small">Respuestas</Button>
                                
                            </CardActions>
                        </Card>
                </Grid>
                )
            })
        )
    }

    return (
        <div>
            
            <Grid item xs={12}>
                            <Item>x</Item>
                        </Grid>
            
            <Grid style ={{width:"100%" , justifyContent: "space-around", marginLeft: "-1%", paddingTop: "2%", paddingLeft: "2%"}} >
                {data}   
            </Grid>
        </div>
    );


}
export default Question;