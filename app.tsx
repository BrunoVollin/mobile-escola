import React from "react";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import Routes from "./src/routes";
import Theme from "./Theme";
import { DefaultTheme } from "react-native-paper";
import { Provider as PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#005AFF",
    secondaryContainer: 'transparent',
  },
};

const App = () => {
  return (
    <Theme>
      <PaperProvider theme={theme}>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </PaperProvider>
    </Theme>
  );
};

export default App;
