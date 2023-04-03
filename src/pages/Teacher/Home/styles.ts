import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Wrapper = styled.View`
    display : flex; 
    width: 100%;
    align-items: center;
`;

export const Container = styled.ScrollView.attrs({
    // hide the scroll bar
    showsVerticalScrollIndicator: false,

})`

    width: 90%;
`;