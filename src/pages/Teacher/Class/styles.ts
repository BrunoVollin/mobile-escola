import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
    margin-top: ${RFValue(20)}px;
    display : flex; 
    width: 100%;
    align-items: center;
`;

export const Container = styled.View`
    display : flex; 
    align-items: center;
    width: 90%;
`;