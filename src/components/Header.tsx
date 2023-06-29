import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/actions/UiSlice'
import Modal from './Modal'

const Header = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state:any) => state.cart.totalQuantity)
  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }

  return (
    <div className='header'>
      <h2>Shopping site</h2>
      <Button variant='outlined' className='text-info border-info d-flex align-items-center cart-btn' onClick={toggleHandler} >Cart <p>{cartQuantity}</p></Button>
      <Modal />
    </div>
  )
}

export default Header
