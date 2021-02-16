import React from 'react';
import Routes from './Routes'
import ContactContextProvider from './contexts/ContactContext'
function App(props) {
  return (
    <ContactContextProvider>
      <Routes/>
    </ContactContextProvider>
  );
}

export default App;
