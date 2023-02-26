import { Text } from "react-native";
import { Wrapper, Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import { Button } from "react-native-paper";

interface HomeProps {}

export default function Home() {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  return (
    <>
      <Wrapper>
        <Container>
          <Text>
            Home: {"\n"}
            {JSON.stringify(user)}
          </Text>
          <Button mode="contained" onPress={() => signOut()}>
            Sair
          </Button>
        </Container>
      </Wrapper>
    </>
  );
}
