import React, { FC, useEffect } from 'react'
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
import { getAllDoctors } from '../../app/features/doctors/doctorsSlice';
import { SkeletonContainer } from 'react-native-skeleton-component';
import { SkeletonView } from '../../components/SkeletonView';

const DoctorImage = require('../../assets/images/doctor.jpg')
export const Doctors: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { all } = useAppSelector(state => state.doctors)

    return (
        <ScrollView>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <Text style={[cs.title]}>Список врачей</Text>
                    <View style={[cs.fColumn, cs.spaceM]}>
                        <View style={[cs.fColumn, cs.spaceM]}>
                            {
                                all.loading ?
                                    <SkeletonContainer>
                                        <SkeletonView width={"100%"} height={189} />
                                        <SkeletonView width={"100%"} height={189} />
                                    </SkeletonContainer> :
                                    all.items.map(item => (
                                        <DoctorItem navigation={navigation} {...item} />
                                    ))
                            }

                        </View>
                        {
                            !all.loading ? <View style={[cs.fAlCenter]}>
                                <TouchableOpacity style={[{ width: 154, paddingVertical: 6 }]}>
                                    <Text style={[cs.blueLink, cs.fSemi]}>Загрузить еще врачей</Text>
                                </TouchableOpacity>
                            </View> :
                                <View style={[cs.fColumn, cs.spaceS]}>
                                    <SkeletonContainer>
                                        <SkeletonView width={"100%"} height={100} />
                                        <SkeletonView width={"100%"} height={100} />
                                    </SkeletonContainer>
                                </View>
                        }


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