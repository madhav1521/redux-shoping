import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import { ThemeProvider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { appTheme } from './app.theme';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const AllProducts = lazy(() => import('./components/AllProducts'));

function App() {
  const loader = {
    spinner: () => (<div style={{color:'white', marginTop:'5rem'}}>Loading...<CircularProgress color='primary'/></div>)
  }
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={appTheme}>
            <Header />
            <Cart />
          <Suspense fallback={loader.spinner()}>
            <AllProducts />
          </Suspense>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
