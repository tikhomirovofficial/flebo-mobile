import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/base/hooks";
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";

import { cs } from "../../../common/styles";

import { InputField } from '../../InputField';
import { containerStyles } from '../../AppContainer';
import WhiteBordered from '../../WhiteBordered';
import { ModalShadow } from '../../ModalShadow';
import MainButton from '../../MainButton';
import { handleProfileEditModal } from '../../../app/features/modals/modalsSlice';

const ProfileEditModal = () => {
    const dispatch = useAppDispatch()
    // const theme = useAppTheme()
    const { profileEditModal } = useAppSelector(state => state.modals)
    // const { form, data } = useAppSelector(state => state.profile)

    //const formAndDataEqual = Object.keys(form).every((key) => form[key as keyof ProfileEditTextFields] === data[key as keyof ProfileData])

    const handleModal = () => {
        dispatch(handleProfileEditModal())
    }

    useEffect(() => {
        return () => {
            //dispatch(setDefaultProfileForm())
        }
    }, [])

    return (
        <Modal style={{ position: "relative" }} animationType={"slide"} visible={profileEditModal} transparent={true}>
            <ModalShadow show={profileEditModal} />
            <WhiteBordered isModal style={{ paddingBottom: 20, position: "relative" }}>
                <View style={[cs.flexOne, styles.profileDataBlock, cs.fColumnBetw, cs.spaceXXL]}>
                    <View style={[cs.fRowBetw, cs.fAlCenter]}>
                        <TouchableOpacity onPress={handleModal}>
                            <Text
                                style={[cs.fzM, cs.fSemi, cs.blueLink]}>Закрыть</Text>
                        </TouchableOpacity>
                        <View style={[cs.fAlCenter]}>
                            <Text style={[cs.fzM, { fontFamily: cs.title.fontFamily, fontSize: 24 }]}>Личные данные</Text>
                        </View>
                        <View style={{ flex: 0.4 }}></View>
                    </View>
                    <View style={[styles.profileDataContent, cs.spaceM]}>

                        <View style={[cs.fColumn, cs.spaceM]}>
                            <Text style={[cs.fzS, cs.text]}>Измените личные данные</Text>
                            <InputField placeholder='Имя' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Фамилия' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Отчество' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Дата рождения' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Дата рождения' val={""} onChange={(val) => { }} />

                            <InputField placeholder='Придумайте пароль' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Подтверждение пароля' val={""} onChange={(val) => { }} />
                            <InputField placeholder='E-mail' val={""} onChange={(val) => { }} />
                            <MainButton handlePress={() => { }}>
                                <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Далее</Text>
                            </MainButton>
                        </View>


                        {/* <ButtonYellow isFilled={true} disabled={formAndDataEqual} handlePress={() => { }}>
                            <Text style={[cs.fzM, cs.yellowBtnText, cs.colorBlack]}>Сохранить</Text>
                        </ButtonYellow> */}
                    </View>

                </View>
            </WhiteBordered>


        </Modal >

    );
};

const styles = StyleSheet.create({
    inputField: {
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderStyle: "solid",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#E2E2E9"
    },
    selectableBtn: {
        minWidth: (containerStyles.container.maxWidth / 2) - 10,
        height: 52
    },
    profileInfo: {
        maxWidth: 228
    },
    avatarBlock: {
        backgroundColor: "white",
        height: 80,
        width: 80,
    },
    block: {
        height: 80,
    },
    bonuses: {
        paddingHorizontal: 15,
        paddingVertical: 6
    },
    profileHubItem: {
        paddingVertical: 14,
        borderRadius: 16,
        overflow: "hidden",
        gap: 18,
        minWidth: 140
    },
    profileItemIcon: {
        height: 64,
        width: 64
    },
    profileDataBlock: {
        minHeight: "100%"
    },
    profileDataContent: {
        flex: 1,
    }
})
export default ProfileEditModal;