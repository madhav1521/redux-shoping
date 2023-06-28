import React from 'react';
import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import AllProducts from './components/AllProducts';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './app.theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={appTheme}>
          <Header />
          <Cart />
          <AllProducts />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
