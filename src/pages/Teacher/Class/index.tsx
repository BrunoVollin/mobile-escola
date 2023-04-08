import { Text } from "react-native";
import { Wrapper, Container } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TeacherClassScreenRouteProp } from "../../../routes";

interface TeacherClassScreenProps {}

export default function TeacherClassScreen() {
  const navigation = useNavigation();
  const route = useRoute<TeacherClassScreenRouteProp>();

  const { classId } = route.params;
  console.log({ classId });
  return (
    <>
      <Wrapper>
        <Container>
          <Text>TeacherClassScreen {classId}</Text>
        </Container>
      </Wrapper>
    </>
  );
}
