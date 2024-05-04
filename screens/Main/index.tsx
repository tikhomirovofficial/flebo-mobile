import React, { FC } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { ArrowRight, BackIcon, DocsIcon, DoctorThingIcon, HistoryIcon, MenuIcon, PlanIcon, ProfileIcon, SearchIcon } from '../../icons';
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
import { BlueLink } from '../../components/BlueLink';
import { SkeletonContainer } from 'react-native-skeleton-component';
import { SkeletonView } from '../../components/SkeletonView';

const UziServiceImage = require('../../assets/images/services/uzi.jpg')
const AnalisysServiceImage = require('../../assets/images/services/analysis.jpg')
const DoctorImage = require('../../assets/images/doctor.jpg')

export const Main: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { data, loadings } = useAppSelector(state => state.profile)
    const { doctors, documents } = useAppSelector(state => state)

    return (
        <ScrollView>
            <MainContainer>

                <View style={[cs.fColumn, cs.spaceXL]}>
                    <AppContainer>
                        <View style={[cs.fColumn, cs.spaceM]}>
                            <View style={[cs.fColumn, cs.spaceM]}>

                                {
                                    loadings.profile ?
                                        <SkeletonContainer>
                                            <SkeletonView width={"100%"} height={56} />
                                        </SkeletonContainer> :

                                        <Text style={[cs.title]}>+{data.phone}</Text>
                                }



                                {/* <View style={[styles.search, cs.bgGray, cs.fRow, cs.fAlCenter, cs.spaceS, cs.mainRadius]}>
                                    <SearchIcon />
                                    <TextInput style={[cs.fzM, cs.fReg, cs.flexOne, { height: "100%" }]} placeholder={"Поиск"} />
                                </View> */}
                            </View>

                            <View style={[cs.fColumn, cs.spaceS]}>
                                {
                                    loadings.profile ?
                                        <SkeletonContainer>
                                            <SkeletonView width={"100%"} height={86} />
                                            <SkeletonView width={"100%"} height={85} />

                                        </SkeletonContainer> :
                                        <>
                                            <TouchableOpacity style={[{ padding: 24 }, cs.bgGray, cs.fRow, cs.fAlCenter, cs.fRowBetw, cs.spaceS, cs.mainRadius]}>
                                                <Text style={[cs.subTitle, cs.colorDark, { fontSize: 32 }]}>Результаты анализов</Text>
                                                <MenuIcon />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[{ padding: 24 }, cs.bgGray, cs.fRow, cs.fAlCenter, cs.fRowBetw, cs.spaceS, cs.mainRadius]}>
                                                <Text style={[cs.subTitle, cs.colorDark, { fontSize: 32 }]}>Записаться к врачу</Text>
                                                <MenuIcon />
                                            </TouchableOpacity>
                                        </>
                                }

                            </View>


                        </View>
                    </AppContainer>
                    <AppContainer style={[cs.fColumn, cs.spaceM]}>
                        <Text style={[cs.subTitle]}>Услуги</Text>
                        <View style={[cs.fRowBetw]}>
                            <ServiceItem style={{ width: "47%" }} title={"УЗИ"} image={UziServiceImage} />
                            <ServiceItem style={{ width: "47%" }} title={"Сдать анализы"} image={AnalisysServiceImage} />
                        </View>
                    </AppContainer>
                    {/* <View style={[cs.fColumn, cs.spaceM]}>
                        <AppContainer>
                            <Text style={[cs.subTitle]}>Услуги</Text>
                        </AppContainer>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={[cs.fRow, cs.spaceM, { paddingHorizontal: 20 }]}>
                            <ServiceItem title={"УЗИ"} image={ServiceImage} />
                            <ServiceItem title={"УЗИ"} image={ServiceImage} />
                            <ServiceItem title={"УЗИ"} image={ServiceImage} />
                        </ScrollView>
                    </View> */}
                    <AppContainer style={[cs.fColumn, cs.spaceM]}>
                        <Text style={[cs.subTitle]}>Последние результаты</Text>
                        {
                            documents.all.loading ?
                                <SkeletonContainer>
                                    <SkeletonView width={"100%"} height={152} />
                                </SkeletonContainer> :
                                <ResultItem {...documents.all.items[0]} />

                        }
                        <View style={[cs.fCenterRow]}>
                            <BlueLink onPress={() => alert("sas")} title={"Смотреть все документы"} />
                        </View>

                    </AppContainer>
                    <AppContainer style={[cs.fColumn, cs.spaceM]}>
                        <Text style={[cs.subTitle]}>Врачи</Text>


                        {
                            doctors.all.loading ?
                                <SkeletonContainer>
                                    <SkeletonView width={"100%"} height={189} />
                                </SkeletonContainer> :
                                <View>
                                    <DoctorItem {...doctors.all.items[0]} />
                                </View>
                        }

                        <View style={[cs.fCenterRow]}>
                            <BlueLink onPress={() => alert("sas")} title={"Смотреть всех врачей"} />
                        </View>

                    </AppContainer>
                </View>

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