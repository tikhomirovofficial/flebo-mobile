import React from 'react'
import { View, Text } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { BackIcon } from '../../icons';
import { InputField } from '../../components/InputField';
import MainButton from '../../components/MainButton';
import { phoneMask } from '../../config/masks';
import { useAppDispatch, useAppSelector } from '../../app/base/hooks';
import { handleRestoreForm } from '../../app/features/auth/restorePasswordSlice';

export const RestorePassword = () => {
    const dispatch = useAppDispatch()
    const { data } = useAppSelector(state => state.restorePassword)
    return (
        <AppContainer style={{ height: "100%" }}>
            <View style={[cs.flexOne, cs.fColumnBetw]}>
                <BackIcon />
                <View style={[cs.fColumnBetw, { flex: 1, paddingTop: "26%" }]}>
                    <View style={[cs.fColumn, cs.spaceL]}>
                        <Text style={[cs.title]}>Восстановление пароля</Text>
                        <View style={[cs.fColumn, cs.spaceM]}>
                            <View style={[cs.fColumn, cs.spaceM]}>
                                <View style={[cs.fColumn, cs.spaceM]}>
                                    <Text style={[cs.fzS, cs.text]}>Введите номер телефона</Text>
                                    <InputField type={"number-pad"} placeholder='+7' mask={phoneMask} val={data.phone} onChange={(val) => dispatch(handleRestoreForm({ key: "phone", val }))} />
                                </View>
                                <MainButton handlePress={() => { }}>
                                    <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Далее</Text>
                                </MainButton>
                            </View>
                        </View>
                    </View>
                    <View style={[cs.fAlCenter]}>
                        <Text style={[{ width: "78%" }, cs.txtCenter, cs.fzS, cs.fReg]}>Нажимая на кнопку, я даю согласие на обработку <Text style={[cs.blueLink, cs.fSemi]}>персональных данных</Text></Text>
                    </View>
                </View>
            </View>
        </AppContainer>
    )
}
