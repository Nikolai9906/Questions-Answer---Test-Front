import React, { useRef }  from 'react';
import {useState, useEffect} from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { Button} from "@mui/material";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Item from '@mui/material/MenuItem';

function Question() {

    const [ question, setQuestion ] = useState('');
    
    const idRef = useRef();

    const getQuestion = () => {
        
        axios.get(`http://localhost:8080/v1/question`)
        .then((res) => {
            //console.log(res.data)
            setQuestion(res.data)
            //console.log(question)
            const [answers, detail, emailUser, id, title] = question;
            console.log(detail)
            console.log(answers);
            
        }).catch((error) => {
            console.log(error)
        })
        
    };
    

    useEffect(() => {
        getQuestion();
    }, []);

    let data = 
    <Grid container spacing={3}>
        <Grid item xs={12} style={{paddingTop: "5%", marginLeft: "2%"}}>
            <Alert severity="info">
                <AlertTitle>INFORMACION</AlertTitle>
                No hay rutinas asignadas en este pefil — <strong>agrega una rutina o comunicate con servicio tecnico</strong>
            </Alert>
        </Grid>
        
    </Grid>

    if (question.length > 0) {
        data = (
            question.map((ele, index) => {
                return(
                    <Grid item s={12} style={{paddingTop: '40px'}}>
                        <Card sx={{ minWidth: 275 }}>
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
                                Respuestas
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                
                                </Typography>
                                <Typography variant="body2">
                                {console.log(ele.detail)}
                                <br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
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
            <Grid style ={{width:"100%" , justifyContent: "space-around", marginLeft: "-1%", paddingTop: "5%"}} container spacing={3}>
                {data}   
            </Grid>
        </div>
    );


}
export default Question;