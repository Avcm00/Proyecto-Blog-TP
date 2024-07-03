import React, { useState } from 'react';
import Loginstart from './componentes/login';
import PrincipalPage from './componentes/index.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <PrincipalPage/> 
      ) : (
        <Loginstart onLogin={handleLogin} />
      )}
      </div>
    
  );
}

export default App;
