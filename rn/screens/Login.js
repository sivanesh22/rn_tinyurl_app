
import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';
import { ButtonText, Container, ContainerScroll, ErrorSmallText, InputText, SectionView, Title, TouchableButtonWrapper } from '../stylesComponents/Login';
import GlobalService from '../globals/GlobalService';
import resturls from '../globals/Apiurls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';


const Login = (props) => {
    const initialValues = {
        email: '',
        password: ''
    }

    const [errortext, setErrortext] = useState('');


    handleValidateLogin = async (values) => {
        const deviceOS = DeviceInfo.getSystemName();
        const deviceName = await DeviceInfo.getDeviceName();
        let obj = {
            ...values,
            deviceName,
            deviceOS
        }
        GlobalService.generalSelect(
            async (respdata) => {
                const { isCredentialValid, errorMsg, c1 } = respdata;
                if (isCredentialValid) {
                    try {
                        await AsyncStorage.setItem('c1', c1)
                    } catch (err) {
                        console.log(err, 'Error in storing token in async storage')
                    }
                    props.navigation.push('Dashboard');
                } else if (errorMsg) {
                    setErrortext(errorMsg)
                } else {
                    setErrortext('Invalid Credentials')
                }
            },
            resturls.validateLogin,
            obj,
            'POST',
        );
    }

    return (
        <Container>
            <ContainerScroll
                keyboardShouldPersistTaps="handled" >
                <View>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleValidateLogin}>
                        {({
                            handleSubmit, handleChange, values
                        }) => {
                            return (<KeyboardAvoidingView enabled>
                                <Title>Sign In</Title>
                                <SectionView>
                                    <InputText
                                        onChangeText={handleChange('email')}
                                        placeholder="Enter Email"
                                        placeholderTextColor="#8b9cb5"
                                        autoCapitalize="none"
                                        keyboardType="email-address"
                                        returnKeyType="next"
                                        underlineColorAndroid="#f000"
                                        blurOnSubmit={false}
                                    />
                                </SectionView>
                                <SectionView>
                                    <InputText
                                        onChangeText={handleChange('password')}
                                        placeholder="Enter Password"
                                        placeholderTextColor="#8b9cb5"
                                        keyboardType="default"
                                        secureTextEntry={true}
                                        underlineColorAndroid="#f000"
                                        returnKeyType="next"
                                    />
                                </SectionView>
                                {errortext !== '' ? (
                                    <ErrorSmallText>
                                        {errortext}
                                    </ErrorSmallText>
                                ) : null}
                                <TouchableButtonWrapper
                                    activeOpacity={0.5}
                                    onPress={handleSubmit}>
                                    <ButtonText >LOGIN</ButtonText>
                                </TouchableButtonWrapper>
                            </KeyboardAvoidingView>
                            )
                        }}
                    </Formik>
                </View>
            </ContainerScroll>
        </Container>
    );
};
export default Login;
