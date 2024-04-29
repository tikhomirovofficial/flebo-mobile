import React, { FC } from 'react'
import { StyleSheet, View, Text } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { BackIcon } from '../../icons';
import { InputField } from '../../components/InputField';
import MainButton from '../../components/MainButton';
import { phoneMask } from '../../config/masks';
import { useAppDispatch, useAppSelector } from '../../app/base/hooks';
import { handleLoginForm, sendLogin } from '../../app/features/auth/loginSlice';
import { NavProps } from '../../types/common.types';
import { MainContainer } from '../../components/MainContainer';
import { BlueLink } from '../../components/BlueLink';
import { normalizePhone } from '../../utils/forms/phone/normalizePhone';

export const Login: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(state => state.login)

    const handleSendLogin = () => {
        dispatch(sendLogin({
            username: normalizePhone(data.phone),
            password: data.password
        }))
    }

    return (
        <MainContainer>
            <AppContainer style={{ height: "100%" }}>
                <View style={[cs.flexOne, cs.fColumnBetw]}>
                    <View style={{ height: 32, width: 1 }}></View>
                    {/* <BackIcon /> */}
                    <View style={[cs.fColumnBetw, { flex: 1, paddingTop: "26%" }]}>
                        <View style={[cs.fColumn, cs.spaceL]}>
                            <Text style={[cs.title]}>Войти</Text>
                            <View style={[cs.fColumn, cs.spaceM]}>
                                <View style={[cs.fColumn, cs.spaceM]}>
                                    <View style={[cs.fColumn, cs.spaceS]}>
                                        <View style={[cs.fColumn, cs.spaceM]}>
                                            <Text style={[cs.fzS, cs.text]}>Введите номер телефона и пароль</Text>
                                            <InputField type={"number-pad"} placeholder='+7' mask={phoneMask} val={data.phone} onChange={(val) => dispatch(handleLoginForm({ key: "phone", val }))} />
                                            <InputField hideValue placeholder='Пароль' val={data.password} onChange={(val) => dispatch(handleLoginForm({ key: "password", val }))} />
                                        </View>
                                        <View style={{ alignItems: "flex-end" }}>
                                            <BlueLink title={"Забыли пароль?"} onPress={() => navigation.navigate("restore_password")} />
                                        </View>
                                    </View>
                                    <MainButton handlePress={handleSendLogin}>
                                        <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Далее</Text>
                                    </MainButton>
                                </View>
                                <View style={[cs.dF, cs.fRow, cs.spaceXS, cs.jcCenter, cs.fAlCenter]}>
                                    <Text style={[cs.text]}>Нет аккаунта?</Text>
                                    <BlueLink title={"Зарегистрирутейсь"} onPress={() => navigation.navigate("register")} />
                                </View>
                            </View>
                        </View>
                        <View style={[cs.fAlCenter]}>
                            <Text style={[{ width: "78%" }, cs.txtCenter, cs.fzS, cs.fReg]}>Нажимая на кнопку, я даю согласие на обработку <Text style={[cs.blueLink, cs.fSemi]}>персональных данных</Text></Text>
                        </View>
                    </View>
                </View>
            </AppContainer>
        </MainContainer>

    )
}
