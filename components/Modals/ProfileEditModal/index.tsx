import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/base/hooks";
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";

import { cs } from "../../../common/styles";
import { fs } from "../../../navigation/AppNavigator";

import { InputField } from '../../InputField';
import { containerStyles } from '../../AppContainer';
import WhiteBordered from '../../WhiteBordered';
import { ModalShadow } from '../../ModalShadow';

const tempOpened = true

const ProfileEditModal = () => {
    const dispatch = useAppDispatch()
    // const theme = useAppTheme()
    // const { profileEditModal } = useAppSelector(state => state.modals)
    // const { form, data } = useAppSelector(state => state.profile)

    //const formAndDataEqual = Object.keys(form).every((key) => form[key as keyof ProfileEditTextFields] === data[key as keyof ProfileData])

    const handleModal = () => {
        //dispatch(handleProfileEditModal())
    }

    useEffect(() => {
        return () => {
            //dispatch(setDefaultProfileForm())
        }
    }, [])

    return (
        <Modal style={{ position: "relative" }} animationType={"slide"} visible={tempOpened} transparent={true}>
            <ModalShadow show={tempOpened} />
            <WhiteBordered isModal style={{ paddingBottom: 20, position: "relative" }}>
                <View style={[cs.flexOne, styles.profileDataBlock, cs.fColumnBetw, cs.spaceXXL]}>
                    <View style={[cs.fRowBetw, cs.fAlCenter]}>
                        <Text onPress={handleModal}
                            style={[cs.fzM, cs.modalCloseText]}>Закрыть</Text>
                        <View style={[cs.fAlCenter]}>
                            <Text style={[cs.fzM, cs.colorDark, cs.fzM, cs.colorDark]}>Личные данные</Text>
                        </View>
                        <View style={{ flex: 0.4 }}></View>
                    </View>
                    <View style={[styles.profileDataContent, cs.spaceM]}>
                        <ScrollView>

                        </ScrollView>

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