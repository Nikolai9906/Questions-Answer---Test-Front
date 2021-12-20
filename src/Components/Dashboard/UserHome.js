import React from 'react'
import NavBar from './NavBar';
import { Box } from '@mui/system';
import UserQuestion from './UserQuestion';

const UserHome = props => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar/>
            <UserQuestion/>
        </Box>
    )
}

export default UserHome;