import { Avatar, Button, CardMedia, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import LockOutlined from "@mui/icons-material/LockOutlined";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [role, setRole] = useState("");

  const loginRequest = () => {
    console.log(emailRef.current.value);
    
    axios.post("http://localhost:8080/v1/auth", {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }).then((res) => {
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("email", emailRef.current.value);
      history.push("/user-home")
    }).catch(error => {
      alert("No son las credenciales correctas")
    });

  };

  const createAccountRequest = () => {
    history.push("/signup")
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: -6, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50%"}}>
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">Log in</Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth label="Email" name="email" type="email" inputRef={emailRef} />
            <TextField margin="normal" required fullWidth label="Password" name="password" type="password" inputRef={passwordRef} />
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 3 }} onClick={loginRequest}>Log in</Button>
            <Button fullWidth variant="outlined" sx={{ mt: -1, mb: 3 }} onClick={createAccountRequest}>Crear Cuenta</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;