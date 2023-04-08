import React, { useContext } from "react";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { Text } from "react-native";
import { AuthContext } from "./../contexts/AuthContext";
import Login from "./../pages/Login/index";
import Home from "../pages/Teacher/Home";
import TeacherClassScreen from "../pages/Teacher/Class";

const Stack = createStackNavigator();

type RootStackParamList = {
  TeacherClassScreen: { classId: string };
};

export type TeacherClassScreenRouteProp = RouteProp<
  RootStackParamList,
  "TeacherClassScreen"
>;
export type TeacherClassScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TeacherClassScreen"
>;

export interface TeacherClassScreenProps {
  route: TeacherClassScreenRouteProp;
  navigation: TeacherClassScreenNavigationProp;
}

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
      <Stack.Screen name="TeacherClassScreen" component={TeacherClassScreen} />
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
