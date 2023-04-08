import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
    display : flex; 
    background-color: blue;
    width: 100%;
    align-items: center;
`;

export const Container = styled.View`
    display : flex; 
    background-color: blue;
    align-items: center;
    width: 90%;
`;

export const RowContain = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const ColumnContain = styled.View`
    flex-direction: column;
    width: 100%;
`;

export const Subtitle = styled.Text`
    font-size: ${RFValue(10)}px;
    margin-left: ${RFValue(15)}px;
    margin-right: ${RFValue(40)}px;
`;