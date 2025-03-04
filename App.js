import React, { useState } from "react";
import Register from "././compo/first";
import Login from "././compo/login";
import Com from "././compo/lst";

function App() {
  const [user, setUser] = useState(null);  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleRegister = (username, password) => {
    setUser({ username, password }); 
    alert("Registration Successful! Now login.");
  };

  const handleLogin = (username, password) => {
    if (user && username === user.username && password === user.password) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div>
      {!user ? (
        <Register onRegister={handleRegister} />
      ) : !isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Com />
      )}
    </div>
  );
}

export default App;
