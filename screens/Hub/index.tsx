import React, { FC } from 'react'
import { StyleSheet, View, Text, ScrollView } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { BackIcon, DocsIcon, HistoryIcon, PenDrawedUnderIcon, PlanIcon, ProfileIcon } from '../../icons';
import { InputField } from '../../components/InputField';
import MainButton from '../../components/MainButton';
import { phoneMask } from '../../config/masks';
import { useAppDispatch, useAppSelector } from '../../app/base/hooks';
import { handleLoginForm } from '../../app/features/auth/loginSlice';
import { NavProps } from '../../types/common.types';
import { MainContainer } from '../../components/MainContainer';
import ProfileEditModal from '../../components/Modals/ProfileEditModal';
import { handleProfileEditModal } from '../../app/features/modals/modalsSlice';
import OrderModal from '../../components/Modals/OrderModal';

export const Hub: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { profileEditModal } = useAppSelector(state => state.modals)

    return (
        <>
            <ScrollView>

                <MainContainer>
                    <AppContainer style={{ height: "100%" }}>
                        <View style={[cs.flexOne, cs.fColumnBetw]}>
                            <View style={[cs.fColumnBetw, { flex: 1 }]}>
                                <View style={[cs.fColumn, cs.spaceXL]}>
                                    <Text style={[cs.title]}>Здравствуйте, Артём!</Text>
                                    <View style={[cs.fColumn, cs.spaceM]}>
                                        <MainButton style={[cs.fRow, cs.spaceS, styles.hubBtn]} handlePress={() => dispatch(handleProfileEditModal())}>
                                            <PenDrawedUnderIcon height={18} width={18} />
                                            <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fMed]}>Личные данные</Text>
                                        </MainButton>
                                        <MainButton isFilled={false} style={[cs.fRow, cs.spaceS, styles.hubBtn]} handlePress={() => { }}>
                                            <HistoryIcon />
                                            <Text style={[cs.txtCenter, cs.fzM, cs.colorGray, cs.fMed]}>История посещения</Text>
                                        </MainButton>
                                        <MainButton isFilled={false} style={[cs.fRow, cs.spaceS, styles.hubBtn]} handlePress={() => { }}>
                                            <PlanIcon />
                                            <Text style={[cs.txtCenter, cs.fzM, cs.colorGray, cs.fMed]}>План лечения</Text>
                                        </MainButton>
                                        <MainButton isFilled={false} style={[cs.fRow, cs.spaceS, styles.hubBtn]} handlePress={() => { }}>
                                            <DocsIcon />
                                            <Text style={[cs.txtCenter, cs.fzM, cs.colorGray, cs.fMed]}>Документы</Text>
                                        </MainButton>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </AppContainer>
                </MainContainer>
            </ScrollView>
            {!profileEditModal ? <ProfileEditModal /> : false}
            {!true ? <OrderModal /> : false}
        </>

    )
}

const styles = StyleSheet.create({
    hubBtn: {
        height: 64
    }
})