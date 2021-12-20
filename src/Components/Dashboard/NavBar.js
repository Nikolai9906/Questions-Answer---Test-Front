import { AppBar, Toolbar, Typography, IconButton, Box, Button, Grid, MenuItem,  Menu, } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import { useHistory } from "react-router";
import { red } from '@mui/material/colors';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const NavBar = () => {
    const history = useHistory();
    const menuId = "account-menu";

    const redirectLogin = () => {
        history.push("/login");
    };

    const redirectQuestions = () => {
        history.push("/user-home");
    };

    const redirectCreateQuestions = () => {
        history.push("/create-question");
    };

    const redirectMyQuestions = () => {
        history.push("/user-home");
    };

    

    const redirectHome = () => {
        localStorage.setItem("email", "");
        localStorage.setItem("accessToken", "");
        history.push("/");
    };

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
          backgroundColor: red[700],
        },
      }));



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

    return (
        <AppBar position="fixed" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <Typography style={{ display: 'inline' }} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Question {<p style={{ color: '#3a86ff', display: 'inline' }}> & </p>}Answer
                </Typography>
                <Grid container sx={{ml: 3}}>
                    <Grid item>
                        <Button onClick={redirectQuestions} variant="outlined" color="inherit" sx={{mr: 2}}>Preguntas</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={redirectCreateQuestions} variant="outlined" color="inherit" sx={{mr: 2}}>Crear pregunta</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={redirectMyQuestions} variant="outlined" color="inherit" sx={{mr: 2}}>Mis preguntas</Button>
                    </Grid>
                </Grid>
            
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}  
                    />
                </Search>

                <Box>
                    <ColorButton onClick={redirectHome} variant="contained" sx={{mr: 2}}>Cerrar Sesion</ColorButton>  
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;