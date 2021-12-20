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
  
  
  const CreateQuestion = () => {
    
    const titleRef = useRef();
    const descriptionRef = useRef();
    const history = useHistory();
  
    
    const AddQuestion = () => {
        if(!(descriptionRef.current.value == "" || descriptionRef.current.value == null 
            ||titleRef.current.value == "" ||titleRef.current.value == null)){
                axios.post(`http://localhost:8080/v1/question`,{
            emailUser: localStorage.getItem("email"),
            title: titleRef.current.value,
            detail: descriptionRef.current.value
            },
            { headers: {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`} })
            .then((res) => {
                alert("Pregunta creada")
                history.push("/user-home");
            }).catch((error) => {
                alert("El detalle de la respuesta es obligatorio")
                console.log(error)
            })
        } else {
            alert("El titulo y descripcion de la pregunta son obligatorios")
          }
        
    };
  
    const returnUserHome = () => {
        history.push("/user-home");
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
            Crear Pregunta
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            
          <TextField
              margin="normal"
              required
              fullWidth
              label="Titulo"
              name="description"
              type="description"
              autoComplete="description"
              inputRef={titleRef}
            />
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
              onClick={AddQuestion}
            >
              Crear
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 3 }}
              onClick={returnUserHome}
            >
              Volver
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };
  
  export default CreateQuestion;
  