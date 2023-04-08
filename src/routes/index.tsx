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
import { View } from "react-native";
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
        initialRouteName="Home"
        barStyle={{
          backgroundColor: colors.primary,
          borderBottomColor: colors.white,
        }}
        shifting={true}
        activeColor={colors.white}
        inactiveColor={"rgba(255,255,255,0.5)"}
      >
        <Tab.Screen
          options={{
            tabBarColor: "blue",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={Home}
        />
        {/* <Tab.Screen name="Provas" component={() => <Text>Provas</Text>} />
      <Tab.Screen name="Tarefas" component={() => <Text>Tarefas</Text>} />
    <Tab.Screen name="Materiais" component={() => <Text>Materiais</Text>} /> */}
      </Tab.Navigator>
  );
}

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
        component={MyTabs}
        options={
          {
            // title: "Home",
          }
        }
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
