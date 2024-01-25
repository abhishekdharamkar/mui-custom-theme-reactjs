import { Button } from '@mui/material'
import React from 'react'
import { themePalette } from '../constants/Theme/colors'; // Import your theme file
console.log(themePalette.palette)
function CustomButton() {
  return (
    <div>
        <div>Button</div>
        <Button variant="contained">Primary Contained Button</Button>
        <Button variant="outlined">Primary Outlined Button</Button>
        <Button variant="Tertiary">Tertiary Button</Button>
        <Button variant="contained" size="small">Small Button</Button>
        <Button variant="contained" size="medium">Medium Button</Button>
        <Button variant="contained" size="large">Large Button</Button>
        <br/>
        <br/>
        <div>Color Button</div>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button style={{ backgroundColor: themePalette.palette.success[500] }}>Success Button</Button>
        <Button style={{ backgroundColor: themePalette.palette.danger[500] }}>Danger Button</Button>
        <Button style={{ backgroundColor: themePalette.palette.warning[500] }}>Warning Button</Button>
        <Button style={{ backgroundColor: themePalette.palette.info[500] }}>Info Button</Button>
      </div>
  )
}

export default CustomButton