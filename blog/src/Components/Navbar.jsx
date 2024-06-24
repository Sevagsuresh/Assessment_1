import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>BLOG </Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary'>
                    <Link to='/'>
                    HOME</Link>
                    </Button>&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='success'>
                    <Link to='/add'>
                   Add Blog</Link>
                    </Button>
                    </Toolbar>
                    </AppBar>

    </div>
  )
}

export default Navbar