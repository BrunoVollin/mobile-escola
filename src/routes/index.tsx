import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { AuthContext } from "./../contexts/AuthContext";
import Login from "./../pages/Login/index";
import Home from "../pages/Teacher/Home";
import TeacherClasses from "../pages/Teacher/TeacherClasses";

const Stack = createStackNavigator();

const LoggedInStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen name="Profile" component={() => <Text>sadsadas</Text>} />
      <Stack.Screen name='TeacherClasses' component={TeacherClasses} />
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
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <LoggedInStack /> : <LoggedOutStack />}
    </NavigationContainer>
  );
};

export default Routes;
