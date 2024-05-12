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
import { HistoryItem } from '../../components/HistoryItem';
import { getAllHistory } from '../../app/features/history/historySlice';
import { SkeletonContainer } from 'react-native-skeleton-component';
import { SkeletonView } from '../../components/SkeletonView';


export const History: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { all } = useAppSelector(state => state.history)

    useEffect(() => {
        dispatch(getAllHistory({}))
    }, [])

    return (
        <ScrollView>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <BackIcon />
                    </TouchableOpacity>
                    <Text style={[cs.title]}>История посещения</Text>
                    <View style={[cs.fColumn]}>
                        {
                            all.loading ?
                                <View style={[cs.fColumn, cs.spaceS]}>
                                    <SkeletonContainer>
                                        <SkeletonView width={"100%"} height={80} />
                                        <SkeletonView width={"100%"} height={80} />
                                        <SkeletonView width={"100%"} height={80} />
                                    </SkeletonContainer>
                                </View>
                                :

                                all.items.map((item, index) => (
                                    <HistoryItem
                                        isDark={index % 2 !== 0}
                                        leftTopLabel={"25.02.2024"}
                                        rightTopLabel={"2 300 ₽"}
                                        description={item.name}
                                    />
                                ))
                        }
                        {
                            all.part_loading ?
                                <View style={[cs.fColumn, cs.spaceS, {marginTop: 10}]}>
                                    <SkeletonContainer>
                                        <SkeletonView width={"100%"} height={60} />
                                        <SkeletonView width={"100%"} height={60} />
                                    </SkeletonContainer>
                                </View>
                                : null
                        }

                    </View>
                </AppContainer>
            </MainContainer >
        </ScrollView >
    )
}