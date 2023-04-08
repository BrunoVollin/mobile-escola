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
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

const colors = Colors.light;
const Tab = createMaterialBottomTabNavigator();

const navigationTheme = {
  colors: {
    background: "transparent",
  },
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Classes"
      barStyle={{
        backgroundColor: colors.white,
        borderBottomColor: colors.white,
      }}
      shifting={true}
      activeColor={colors.primary}
      inactiveColor={"rgba(62, 62, 62, 0.488)"}
      //animate when cicling through tabs
      labeled={true}
    >
      <Tab.Screen
        options={{
          tabBarColor: "blue",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
        name="Classes"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarColor: "blue",
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={26} />
          ),
        }}
        name="Provas"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarColor: "blue",
          tabBarIcon: ({ color }) => (
            <Icon name="pencil-square-o" color={color} size={26} />
          ),
        }}
        name="Tarefas"
        component={Home}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const LoggedInStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={
          {
            // title: "Home",
          }
        }
      />
      <Stack.Screen
        name="TeacherClassScreen"
        component={TeacherClassScreen}
        options={({ route }: any) => ({ title: route.params.pageName })}
      />
    </Stack.Navigator>
  );
};

const LoggedOutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
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
