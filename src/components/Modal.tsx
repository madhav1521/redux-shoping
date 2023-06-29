import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Cart from './Cart';
import { useSelector } from 'react-redux';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cartQuantity = useSelector((state: any) => state.cart.totalQuantity)
  return (
    <div>
      <Button variant='outlined' className='text-info border-info d-flex align-items-center cart-btn' onClick={handleOpen}>Open Cart <p>{cartQuantity}</p></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Cart />
        </Box>
      </Modal>
    </div>
  );
}