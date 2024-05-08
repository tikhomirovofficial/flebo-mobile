import React, { FC, useEffect, useState } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { ArrowDownIcon, ArrowRight, BackIcon, DocsIcon, DoctorThingIcon, HistoryIcon, MenuIcon, PenDrawedIcon, PenDrawedUnderIcon, PlanIcon, ProfileIcon, SearchIcon } from '../../icons';
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
import { DropDown } from '../../components/DropDown';

const documentsTypes = [
    {
        id: 1,
        name: "Все"
    },
    {
        id: 2,
        name: "Документы"
    },
    {
        id: 3,
        name: "Исследования"
    },
    {
        id: 4,
        name: "Осмотры"
    }
]

export const Documents: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const [filterOpened, setFilterOpened] = useState(false)
    const [currentFilter, setCurrentFilter] = useState(1)

    const { all } = useAppSelector(state => state.documents)
    useEffect(() => {
        console.log(all.loading);

    }, [all.items])
    return (
        <ScrollView nestedScrollEnabled contentContainerStyle={{ minHeight: "100%" }}>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackIcon />
                    </TouchableOpacity>
                    <Text style={[cs.title]}>Документы</Text>
                    <View style={[cs.fColumn, cs.spaceM]}>
                        {
                            !all.loading ?
                                <View style={[cs.fRow, cs.fAlCenter, cs.spaceXS, { position: "relative", zIndex: 1 }]}>
                                    <TouchableOpacity onPress={() => setFilterOpened(!filterOpened)} style={[cs.fRow, cs.fAlCenter, cs.spaceXS]}>
                                        <Text style={[cs.text]}>{documentsTypes.find(item => item.id === currentFilter)?.name}</Text>
                                        <ArrowDownIcon />
                                    </TouchableOpacity>

                                    {
                                        filterOpened ?
                                            <DropDown
                                                style={{ top: "150%", maxWidth: 200 }}
                                                fieldTextKey={"name"}
                                                current={currentFilter}
                                                placeholder={!currentFilter ? "Выберите тип док-ов" : documentsTypes.find(item => item.id === currentFilter)?.name}
                                                handleFocused={() => setFilterOpened(!filterOpened)}
                                                selectHandler={(id) => setCurrentFilter(id)}
                                                items={documentsTypes.filter(item => item.id !== currentFilter)}
                                            /> : null
                                    }

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
                                            <ResultItem {...item} />
                                        ))
                                }
                            </SkeletonContainer>

                        </View>
                        {
                            !all.loading ? <View style={[cs.fAlCenter]}>
                                <TouchableOpacity style={[{ width: 180, paddingVertical: 6 }]}>
                                    <Text style={[cs.blueLink, cs.fSemi]}>Загрузить еще документы</Text>
                                </TouchableOpacity>
                            </View> :
                                <View style={[cs.fColumn, cs.spaceS]}>
                                    <SkeletonContainer>
                                        <SkeletonView width={"100%"} height={70} />
                                        <SkeletonView width={"100%"} height={70} />
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