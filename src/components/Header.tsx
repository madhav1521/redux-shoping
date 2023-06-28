import { Button } from '@mui/material'
import React from 'react'
import { appTheme } from '../app.theme'

const Header = () => {
  return (
    <div className='header'>
      <h2>Shopping site</h2>
      <Button variant='outlined' className='text-info border-info' >Cart</Button>
    </div>
  )
}

export default Header
