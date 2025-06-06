import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Addproduct = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Item Description" variant="outlined" /><br />
        <TextField id="outlined-basic" label="Completion Status" variant="outlined" /><br />
        <TextField id="outlined-basic" label="User ID" variant="outlined" /><br />
        <Stack spacing={2} direction="row">
          <Button variant="contained">Submit</Button>
        </Stack>
      </Box>
    </div>
  )
}

export default Addproduct