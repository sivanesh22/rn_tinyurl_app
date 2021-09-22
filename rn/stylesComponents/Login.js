import styled from 'styled-components';

export const Title = styled.Text`
    font-size: 30px;
    text-align: center;
`;

export const ErrorSmallText = styled.Text`
    font-size: 14px;
    text-align: center;
    color:red;
`;

export const Container = styled.View`
    display: flex;
    flex:1;
    flex-direction: row;
    background-color: white;
`;

export const ContainerScroll = styled.View`
    display: flex;
    flex:1;
    justify-content:center;
`;

export const SectionView = styled.View`
    flexDirection: row;
    height: 40px;
    margin-top: 20px;
    margin-left: 35px;
    margin-right: 35px;
    margin-bottom: 10px;
`;

export const TouchableButtonWrapper = styled.TouchableOpacity`
    background-color: #ffa333;
    border-width: 0;
    color: #FFFFFF;
    border-color: #ffa333;
    height: 40px;
    align-items: center;
    border-radius: 30px;
    margin-left: 35px;
    margin-right: 35px;
    margin-top: 20px;
    margin-bottom: 25px;
`;

export const ButtonText = styled.Text`
    color: ${props => props.primary ? "palevioletred" : "white"};
    paddingVertical: 10px;
    fontSize: 16px;
`;

export const InputText = styled.TextInput`
    flex: 1;
    color: black;
    padding-left: 15px;
    padding-right: 15px;
    border-width: 1px;
    border-radius: 30px;
    border-color: #dadae8;
`;