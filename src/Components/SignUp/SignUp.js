import { Avatar, Button, CardMedia, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import LockOutlined from "@mui/icons-material/LockOutlined";



const SignUp = () => {
    const nameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();
    const [role, setRole] = useState("");


    const handleSignup = () => {
        if (!(nameRef.current.value == "" || nameRef.current.value == null
            || lastNameRef.current.value == "" || lastNameRef.current.value == null
            || emailRef.current.value == "" || emailRef.current.value == null
            || passwordRef.current.value == "" || passwordRef.current.value == null
        )){
            axios.post("http://localhost:8080/v1/user", {
            name: nameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            rol: "USER"
        }).then(response => {
            alert("se ha creado tu cuenta con exito")
            console.log(response);
            history.push("/")
        }).catch(error => {
            alert(error);
        });

        } else {
            alert("Todos los campos son requeridos para crear un usuario")
        }
        
    }

    const returnUserAnswer = () => {
        history.push("/login");
      };
  

    return (
        <Container component="main" maxWidth="xs">
            
            <Box sx={{ marginTop: -6, display: "flex", flexDirection: "column", alignItems: "center" , paddingTop: "50%"}}>
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                </Avatar>
                <Typography component="h1" variant="h5">Crear cuenta</Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth label="Nombre" name="name" type="name" autoComplete="name" inputRef={nameRef} />
                    <TextField margin="normal" required fullWidth label="Apellidos" name="lastName" type="lastName" autoComplete="lastName" inputRef={lastNameRef} />
                    <TextField margin="normal" required fullWidth label="Email" name="email" type="email" autoComplete="email" inputRef={emailRef} />
                    <TextField margin="normal" required fullWidth label="Clave" name="password" type="password" autoComplete="current-password" inputRef={passwordRef} />
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 3 }} onClick={handleSignup}>Crear cuenta</Button>
                    <Button fullWidth variant="outlined" sx={{ mt: -1, mb: 3 }} onClick={returnUserAnswer}>Volver</Button>
                </Box>
            </Box>
        </Container>

    );
}

export default SignUp;