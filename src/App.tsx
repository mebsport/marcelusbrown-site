import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  //Loading Function
  const [loadingHi, setLoadingHi] = useState(false);
  const [loadingName, setLoadingName] = useState(false);

  useEffect(() => {
    setLoadingHi(true);
    setTimeout(() => {
      setLoadingHi(false);
    }, 2000);
    setLoadingName(true);
    setTimeout(() => {
      setLoadingName(false);
    }, 4000);
  }, []);

  //App
  return (
    <div className='App'>
      {loadingHi ? (
        <div className='loading'>
          {' '}
          <h1>Hi,</h1>
        </div>
      ) : loadingName ? (
        <div className='loading'>
          {' '}
          <h1>I'm Marcelus...</h1>
        </div>
      ) : (
        <header className='App-header'>
          <p>LOL</p>
        </header>
      )}
    </div>
  );
}

export default App;
