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
import { SkeletonContainer } from 'react-native-skeleton-component';
import { SkeletonView } from '../../components/SkeletonView';


export const Documents: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { all } = useAppSelector(state => state.doctors)

    return (
        <ScrollView>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <TouchableOpacity>
                        <BackIcon />
                    </TouchableOpacity>
                    <Text style={[cs.title]}>Документы</Text>
                    <View style={[cs.fColumn, cs.spaceM]}>
                        {
                            !all.loading ?
                                <View>
                                    <Text style={[cs.text]}>Все</Text>
                                </View> : null}

                        <View style={[cs.fColumn, cs.spaceM]}>
                            <SkeletonContainer>
                                {
                                    all.loading ?
                                        <SkeletonContainer>
                                            <SkeletonView width={"100%"} height={152} />
                                            <SkeletonView width={"100%"} height={152} />
                                        </SkeletonContainer> :
                                        all.items.map(item => (
                                            <ResultItem full_name={'Подосёнов Вячеслав Сергеевич'} date={'04.05.2024'} />
                                        ))
                                }
                            </SkeletonContainer>

                        </View>
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