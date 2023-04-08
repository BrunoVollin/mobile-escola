import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button } from 'react-native-paper';

export const Wrapper = styled.View`
    display : flex; 
    width: 100%;
    align-items: center;
`;

export const Container = styled.View`
    display : flex; 
  
    width: 90%;
`;

export const StyledButton = styled(Button)`
    margin-top: ${RFValue(30)}px;
`

export const ImageContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(30)}px;
`;