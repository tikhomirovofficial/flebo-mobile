import React, { FC, useEffect, useState } from 'react'
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

const data = [{ id: 1, name: "Москва" }, { id: 52, name: "Этот город наш" }]
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

export const CreateProfile: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const [city, setCity] = useState(0)
    const [sex, setSex] = useState(0)

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
                            <SelectField
                                current={city}
                                fieldTextKey={"name"}
                                items={data}
                                selectHandler={(val) => setCity(val)}
                                val={data.find(item => item.id === city)?.name || ""}
                                placeholder={"Выберите город"}
                            />
                            <SelectField
                                current={sex}
                                fieldTextKey={"name"}
                                items={sexes}
                                selectHandler={(val) => setSex(val)}
                                val={sexes.find(item => item.id === sex)?.name || ""}
                                placeholder={"Ваш пол"}
                            />
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

