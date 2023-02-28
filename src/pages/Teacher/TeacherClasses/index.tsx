import { Text } from 'react-native';
import { Wrapper, Container } from './styles'
import { useNavigation } from '@react-navigation/native';

interface TeacherClassesProps {}

export default function TeacherClasses(){
    const navigation = useNavigation();
    return <>
        <Wrapper>
            <Container>
                <Text>TeacherClasses</Text>
            </Container>
        </Wrapper>
</>
}