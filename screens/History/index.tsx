import React, { FC } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { ArrowRight, BackIcon, DocsIcon, DoctorThingIcon, HistoryIcon, MenuIcon, PenDrawedIcon, PenDrawedUnderIcon, PlanIcon, ProfileIcon, SearchIcon } from '../../icons';
import { InputField } from '../../components/InputField';
import MainButton from '../../components/MainButton';
import { phoneMask } from '../../config/masks';
import { useAppDispatch, useAppSelector } from '../../app/base/hooks';
import { handleLoginForm } from '../../app/features/auth/loginSlice';
import { NavProps } from '../../types/common.types';
import { MainContainer } from '../../components/MainContainer';
import { ServiceItem } from '../../components/ServiceItem';
import { ResultItem } from '../../components/ResutItem';
import { DoctorItem } from '../../components/DoctorItem';
import { ServiceBigItem } from '../../components/ServiceBigItem';
import { HistoryItem } from '../../components/HistoryItem';


export const History: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()

    return (
        <ScrollView>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <TouchableOpacity>
                        <BackIcon />
                    </TouchableOpacity>
                    <Text style={[cs.title]}>История посещения</Text>
                    <View style={[cs.fColumn]}>
                        <HistoryItem leftTopLabel={"25.02.2024"} rightTopLabel={"2 300 ₽"} description={"Пребывание в круглосуточном стационаре с медикаментозным обеспечением и питанием ( VIP палата) 1 койко день"} />
                        <HistoryItem isDark leftTopLabel={"25.02.2024"} rightTopLabel={"2 300 ₽"} description={"Пребывание в круглосуточном стационаре с медикаментозным обеспечением и питанием ( VIP палата) 1 койко день"} />
                        <HistoryItem leftTopLabel={"25.02.2024"} rightTopLabel={"2 300 ₽"} description={"Пребывание в круглосуточном стационаре с медикаментозным обеспечением и питанием ( VIP палата) 1 койко день"} />
                        <HistoryItem isDark leftTopLabel={"25.02.2024"} rightTopLabel={"2 300 ₽"} description={"Пребывание в круглосуточном стационаре с медикаментозным обеспечением и питанием ( VIP палата) 1 койко день"} />
                        <HistoryItem leftTopLabel={"25.02.2024"} rightTopLabel={"2 300 ₽"} description={"Пребывание в круглосуточном стационаре с медикаментозным обеспечением и питанием ( VIP палата) 1 койко день"} />
                       
                    </View>

                </AppContainer>
            </MainContainer >
        </ScrollView >
    )
}

