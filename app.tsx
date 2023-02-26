import React from "react";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import Routes from "./src/routes";

const App = () => {

  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
};

export default App;
