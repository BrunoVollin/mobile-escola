import { Text } from "react-native";
import { Wrapper, Container } from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import DataTable from "./../../../../node_modules/react-native-paper/src/components/DataTable/DataTable";
import { Title } from "react-native-paper";

type RootStackParamList = {
  TeacherClassScreen: { data: any, pageName: string};
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

export default function TeacherClassScreen() {
  const navigation = useNavigation();
  const route = useRoute<TeacherClassScreenRouteProp>();

  const { data } = route.params;
  console.log({ data });
  return (
    <>
      <Wrapper>
        <Container>
          <Title>Alunos</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nome</DataTable.Title>
              <DataTable.Title>Email</DataTable.Title>
            </DataTable.Header>
            {data.Students.map((student: any) => (
              <DataTable.Row>
                <DataTable.Cell>{student.first}</DataTable.Cell>
                <DataTable.Cell>{student.email}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Container>
      </Wrapper>
    </>
  );
}
