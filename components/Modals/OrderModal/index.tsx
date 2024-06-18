import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../../app/base/hooks";
import { Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";

import { cs } from "../../../common/styles";

import { InputField } from '../../InputField';
import { containerStyles } from '../../AppContainer';
import WhiteBordered from '../../WhiteBordered';
import { ModalShadow } from '../../ModalShadow';
import MainButton from '../../MainButton';
import { handleOrderModal, handleProfileEditModal } from '../../../app/features/modals/modalsSlice';
import { SelectField } from '../../SelectField';

const sexes = [
    {
        id: 1,
        name: "Мужской"
    },
    {
        id: 2,
        name: "Женский"
    },
    {
        id: 21,
        name: "Женский"
    },
    {
        id: 22,
        name: "Женский"
    },
    {
        id: 23,
        name: "Женский"
    },
    {
        id: 24,
        name: "Женский"
    },
    {
        id: 35,
        name: "Женский"
    },
    {
        id: 215,
        name: "Женский"
    },
    {
        id: 252,
        name: "Женский"
    },

]
const OrderModal = () => {
    const dispatch = useAppDispatch()
    // const theme = useAppTheme()
    const { orderModal } = useAppSelector(state => state.modals)
    const [sex, setSex] = useState(0)
    // const { form, data } = useAppSelector(state => state.profile)

    //const formAndDataEqual = Object.keys(form).every((key) => form[key as keyof ProfileEditTextFields] === data[key as keyof ProfileData])

    const handleModal = () => {
        dispatch(handleOrderModal())
    }

    useEffect(() => {
        return () => {
            //dispatch(setDefaultProfileForm())
        }
    }, [])

    return (
        <Modal style={{ position: "relative" }} animationType={"slide"} visible={orderModal} transparent={true}>
            <TouchableOpacity onPress={() => alert("SAS")} style={[{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0, }]}>
                <ModalShadow show={orderModal} />
            </TouchableOpacity>

            <WhiteBordered likeBottomSheet={{ maxHeight: 500 }} onOutsideClick={handleModal} isModal style={{ paddingBottom: 20, position: "relative" }}>
                <View style={[cs.flexOne, styles.profileDataBlock, cs.fColumnBetw, cs.spaceXXL]}>
                    <View style={[cs.fRowBetw, cs.fAlCenter]}>
                        <TouchableOpacity onPress={handleModal}>
                            <Text
                                style={[cs.fzM, cs.fSemi, cs.blueLink]}>Закрыть</Text>
                        </TouchableOpacity>
                        <View style={[cs.fAlCenter]}>
                            <Text style={[cs.fzM, { fontFamily: cs.title.fontFamily, fontSize: 24 }]}>Запись ко врачу</Text>
                        </View>
                        <View style={{ flex: 0.4 }}></View>
                    </View>
                    <View style={[styles.profileDataContent, cs.spaceM]}>
                        <View style={[cs.fColumn, cs.spaceM]}>
                            <Text style={[cs.fzS, cs.text]}>Измените личные данные</Text>
                            <InputField placeholder='Имя' val={""} onChange={(val) => { }} />
                            <SelectField
                                current={sex}
                                fieldTextKey={"name"}
                                items={sexes}
                                selectHandler={(val) => setSex(val)}
                                val={sexes.find(item => item.id === sex)?.name || ""}
                                placeholder={"Ваш пол"}
                            />

                            <MainButton handlePress={() => { }}>
                                <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Далее</Text>
                            </MainButton>
                        </View>
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
export default OrderModal;