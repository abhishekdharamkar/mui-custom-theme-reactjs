import React from 'react'
import { Box,Typography } from '@mui/material'
function CustomTypography() {
  return (
    <Box >
    <div>Textfield</div>
    <Typography variant='h1'>Heading 1</Typography>
    <Typography variant='h2'>Heading 2</Typography>
    <Typography variant='h3'>Heading 3</Typography>
    <Typography variant='m1'>Medium 1</Typography>
    <Typography variant='m2'>Medium 2</Typography>
    <Typography variant='m3'>Medium 3</Typography>
    <br/>
    <Typography variant='sb1'>semibold 1</Typography>
    <Typography variant='sb2'>semibold 2</Typography>
    <Typography variant='sb3'>semibold 3</Typography>
    </Box>
  )
}

export default CustomTypography