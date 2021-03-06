import { AppBar, Toolbar, Typography, IconButton, Box, Button, Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import { useHistory } from "react-router";

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const NavBarHome = () => {
    const history = useHistory();
    const menuId = "account-menu";

    const redirectLogin = () => {
        history.push("/login");
    };

    const redirectQuestions = () => {
        history.push("/");
    };

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
                </Grid>
            
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search???"
                        inputProps={{ 'aria-label': 'search' }}  
                    />
                </Search>

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