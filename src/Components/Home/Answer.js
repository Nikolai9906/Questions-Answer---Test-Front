import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import { Button} from "@mui/material";

import NavBarHome from './NavBarHome';
import {useState, useEffect} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Item from '@mui/material/MenuItem';

function Answer(){

    const [ answer, setAnswer ] = useState('');

    const getAnswer = () => {
        axios.get(`http://localhost:8080/v1/answer/idQuestion/${localStorage.getItem("questionID")}`)
        .then((res) => {
            setAnswer(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        })
        
    };

    useEffect(() => {
        getAnswer();
    }, []);

    let data = 
    <Grid container spacing={3}>
        <Grid item xs={12} style={{paddingTop: "2%", marginLeft: "2%"}}>
            <Alert severity="info">
                <AlertTitle>INFORMACION</AlertTitle>
                No hay ninguna respuesta — <strong>agrega una respuesta o comunicate con servicio tecnico</strong>
            </Alert>
        </Grid>
    </Grid>

if (answer.length > 0) {
    data = (
        answer.map((ele, index) => {
            return(
                <Grid item s={12} style={{paddingTop: '40px'}}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
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
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {ele.emailUser}
                            </Typography>
                        </CardContent>
                    </Card>
            </Grid>
            )
        })
    )
}


  return (
    <div>
        <NavBarHome />

        <Grid item xs={12}>
            <Item>x</Item>
        </Grid>
        <Grid style ={{width:"100%" , justifyContent: "space-around", marginLeft: "-1%", paddingTop: "2%", paddingLeft: "2%"}} >
            {data}   
        </Grid>
    </div>
  );
}

export default Answer;
