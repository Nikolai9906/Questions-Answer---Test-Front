import {
    Avatar,
    Button,
    CardMedia,
    Container,
    TextField,
    Typography,
    
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useRef } from "react";
  import { useHistory } from "react-router";
  

  const CreateAnswer = () => {
    
    const descriptionRef = useRef();
    const history = useHistory();
  
    
    const AddAnswer = () => {
      if(!(descriptionRef.current.value == "" || descriptionRef.current.value == null)){
        axios.post(`http://localhost:8080/v1/answer`,{
            emailUser: localStorage.getItem("email"),
            title: "",
            detail: descriptionRef.current.value,
            idQuestion: localStorage.getItem("questionID")
        },
        { headers: {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`} })
        .then((res) => {
            alert("Respuesta creada")
            history.push("/user-answer");
        }).catch((error) => {
            alert("El detalle de la respuesta es obligatorio")
            console.log(error)
        })
      } else {
        alert("El detalle de la respuesta es obligatorio")
      }
        
    };
  
    const returnUserAnswer = () => {
      history.push("/user-answer");
    };

    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: -6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center", paddingTop: "50%"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Crear Respuesta
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            
  
            <TextField
              margin="normal"
              required
              fullWidth
              label="Descripcion"
              name="description"
              type="description"
              autoComplete="description"
              inputRef={descriptionRef}
            />
            
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
              onClick={AddAnswer}
            >
              Crear
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 3 }}
              onClick={returnUserAnswer}
            >
              Volver
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default CreateAnswer;
  