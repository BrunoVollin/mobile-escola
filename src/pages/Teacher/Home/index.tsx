import { Text, View } from "react-native";
import { Wrapper, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Button } from "react-native-paper";
import TeacherService from "../../../services/teacher";
import { useFocusEffect } from "expo-router";
import Card from "../../../components/Card";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { TeacherClassScreenNavigationProp } from "../Class";
import { FAB } from "react-native-paper";
import Colors from "../../../../constants/Colors";
const colors = Colors.light;

interface HomeProps {
  navigation: TeacherClassScreenNavigationProp;
}

export default function Home({ navigation }: HomeProps) {
  const { user, signOut } = useContext(AuthContext);
  const [classes, setClasses] = useState<[]>([]);

  const handleGetClasses = async () => {
    const response = await TeacherService.getClasses();
    setClasses(response.classes);
  };

  useFocusEffect(
    useCallback(() => {
      handleGetClasses();
    }, [])
  );

  return (
    <>
      <Wrapper>
        <Container>
          <FlatList
            data={classes}
            // padding bootom
            ListFooterComponent={<View style={{ marginBottom: 20 }}></View>}
            renderItem={({
              item,
            }: {
              item: {
                id: string;
                name: string;
                description: string;
                image: string;
              };
            }) => (
              <Card
                title={item.name}
                subtitle={item.description}
                image={item.image}
                onPress={() => {
                  navigation.navigate("TeacherClassScreen", {
                    data: item,
                    pageName: item.name,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </Container>
      </Wrapper>
          <FAB
            style={{
              position: 'absolute',
              margin: 16,
              right: 0,
              bottom: 0,
              borderRadius: 50,
              backgroundColor: colors.primary,
            }}
            color={colors.white}
            small
            icon="plus"
            onPress={() => console.log("Pressed")}
          />
    </>
  );
}
