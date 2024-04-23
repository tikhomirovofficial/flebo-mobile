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
import { SelectField } from '../../components/SelectField';


export const CreateProfile: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()

    return (
        <ScrollView nestedScrollEnabled>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <Text style={[cs.title]}>Личные данные</Text>
                    <View style={[cs.fColumn]}>
                        <View style={[cs.fColumn, cs.spaceM]}>
                            <Text style={[cs.fzS, cs.text]}>Заполните данные о себе</Text>

                            <InputField placeholder='Имя' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Фамилия' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Отчество' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Дата рождения' val={""} onChange={(val) => { }} />
                            <SelectField current={1} fieldTextKey={"name"} items={[{ id: 1, name: "Москва" }]} selectHandler={() => { }} val={''} placeholder={"Выберите город"} onChange={(val) => { }} />
                            <InputField placeholder='Пол' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Придумайте пароль' val={""} onChange={(val) => { }} />
                            <InputField placeholder='Подтверждение пароля' val={""} onChange={(val) => { }} />
                            <InputField placeholder='E-mail' val={""} onChange={(val) => { }} />
                            <MainButton handlePress={() => { }}>
                                <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Далее</Text>
                            </MainButton>
                        </View>
                    </View>

                </AppContainer>
            </MainContainer >
        </ScrollView >
    )
}

