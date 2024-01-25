import { MenuItem, Select } from '@mui/material'
import React from 'react'

function CustomSelect() {
  return (
    <div>
    <div>CustomSelect</div>
     <Select variant="outlined" color="primary">
        <MenuItem value={10}>Item 1</MenuItem>
        <MenuItem value={20}>Item 2</MenuItem>
        <MenuItem value={30}>Item 3</MenuItem>
      </Select>
    </div>
  )
}

export default CustomSelect