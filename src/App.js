import React, { useState } from 'react';
import Loginstart from './componentes/login';
import PrincipalPage from './componentes/index';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <div className='contener'>
      {isLoggedIn ? (
        <PrincipalPage />
      ) : (
        <Loginstart onLogin={handleLogin} />
      )}
      </div>
    </div>
  );
}

export default App;
