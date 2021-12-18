import React from 'react'
import NavBarHome from './NavBarHome';
import { Box } from '@mui/system';
import Questions from './Questions';

const Home = props => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBarHome />
            <Questions/>
        </Box>
    )
}

export default Home;