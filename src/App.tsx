import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import { ThemeProvider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { appTheme } from './app.theme';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { useSelector } from 'react-redux';
const AllProducts = lazy(() => import('./components/AllProducts'));

function App() {
  const loader = {
    spinner: () => (<div style={{color:'white', marginTop:'5rem'}}>Loading...<CircularProgress color='primary'/></div>)
  }
  const cartToggle = useSelector((state:any) => state.ui.isVisible)
  const cart = useSelector((state:any) => state.cart)

  useEffect(() => {
    fetch('https://travel-and-tour-35872-default-rtdb.firebaseio.com/shopping.json',{
      method:'PUT',
      body:JSON.stringify(cart)
    })
    console.log(cart);
  },[cart]);
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={appTheme}>
            <Header />
            {cartToggle ? <Cart />: null }
          <Suspense fallback={loader.spinner()}>
            <AllProducts />
          </Suspense>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
