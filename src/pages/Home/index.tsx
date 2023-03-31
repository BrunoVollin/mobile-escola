import { Text } from "react-native";
import { Wrapper, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import { Button } from "react-native-paper";
import TeacherService from "../../services/teacher";
import { useFocusEffect } from "expo-router";
import Card from "../../components/Card";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

interface HomeProps {}

export default function Home() {
  const navigation = useNavigation();
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
            renderItem={({
              item,
            }: {
              item: {
                id: string;
                name: string;
                description: string;
              };
            }) => <Card title={item.name} subtitle={item.description} />}
            keyExtractor={(item) => item.id}
          />
        </Container>
      </Wrapper>
    </>
  );
}
