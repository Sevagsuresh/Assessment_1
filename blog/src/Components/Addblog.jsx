
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addblog = () => {
  return (
    <div>
       <Typography variant='h3'>Blog Entery </Typography><br/><br/><br/>
        <TextField  label="Name" variant="outlined" /><br/><br/>
        <TextField  label="Description" variant="outlined" /><br/><br/>
        <TextField  label="Author Name" variant="outlined" /><br/><br/>
        <Button variant="contained">SUBMIT</Button>
 
    </div>
  )
}

export default Addblog
