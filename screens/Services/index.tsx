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

const UziServiceImage = require('../../assets/images/services/uzi.jpg')
const AnalisysServiceImage = require('../../assets/images/services/analysis.jpg')

export const Services: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()

    return (
        <ScrollView>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <Text style={[cs.title]}>Услуги</Text>
                    <View style={[cs.fColumn, cs.spaceM]}>
                        <ServiceBigItem title={"УЗИ"} image={UziServiceImage} />
                        <ServiceBigItem title={"Сдать анализы"} image={AnalisysServiceImage} />

                    </View>
                </AppContainer>
            </MainContainer >
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    search: {
        height: 60,
        paddingHorizontal: 20
    }
})