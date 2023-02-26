import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { AuthContext } from "./../contexts/AuthContext";
import Login from "./../pages/Login/index";

const Stack = createStackNavigator();

const LoggedInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={() => <Text>sadsadas</Text>}
        //set title
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen name="Profile" component={() => <Text>sadsadas</Text>} />
    </Stack.Navigator>
  );
};

const LoggedOutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Tela de Login",
        }}
      />
    </Stack.Navigator>
  );
};  

const Routes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <LoggedInStack /> : <LoggedOutStack />}
    </NavigationContainer>
  );
};

export default Routes;
