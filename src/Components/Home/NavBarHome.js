import { AppBar, Toolbar, Typography, IconButton, MenuItem, Box, Menu, Button, Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { useHistory } from "react-router";

const NavBarHome = () => {
    const history = useHistory();
    const menuId = "account-menu";

    const redirectLogin = () => {
        history.push("/login");
    };

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <Typography style={{ display: 'inline' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Question {<p style={{ color: '#3a86ff', display: 'inline' }}> & </p>}Answer
                </Typography>
                <Grid container sx={{ml: 3}}>
                    <Grid item>
                        <Button variant="outlined" color="inherit" sx={{mr: 2}}>Preguntas</Button>
                    </Grid>
                </Grid>
                <Box>
                    <IconButton onClick={redirectLogin} aira-controls={menuId} aria-hashpopup="true" color="primary" size="large" edge="end">
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBarHome;