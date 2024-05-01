import React, { FC, useEffect } from 'react'
import { View, Text, ScrollView } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { InputField } from '../../components/InputField';
import MainButton from '../../components/MainButton';
import { dateMask } from '../../config/masks';
import { useAppDispatch, useAppSelector } from '../../app/base/hooks';
import { NavProps } from '../../types/common.types';
import { MainContainer } from '../../components/MainContainer';
import { SelectField } from '../../components/SelectField';
import { checkValidForm, editProfile, handleEditProfileSelectFields, handleEditProfileTextFields } from '../../app/features/profile/profileSlice';
import { ProfileEditReq } from '../../types/api/user.api.types';



export const CreateProfile: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { text_fields, select_fields, available_cities, available_genders, state } = useAppSelector(state => state.profile.edit_form)

    const handleSendEditProfile = () => {
        const preparedReq: ProfileEditReq = {
            first_name: text_fields.first_name,
            last_name: text_fields.last_name,
            subname: text_fields.subname,
            gender: select_fields.gender === 1 ? true : false,
            city: select_fields.city,
            dob: text_fields.dob,
            email: text_fields.email,   
        }

        if (text_fields.password !== undefined && text_fields.password?.length > 0) {
            preparedReq.password = text_fields.password
        }
        dispatch(editProfile(preparedReq))
    }
    
    useEffect(() => { dispatch(checkValidForm()) }, [text_fields, select_fields])

    return (
        <ScrollView nestedScrollEnabled>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <Text style={[cs.title]}>Личные данные</Text>
                    <View style={[cs.fColumn]}>
                        <View style={[cs.fColumn, cs.spaceM]}>
                            <Text style={[cs.fzS, cs.text]}>Заполните данные о себе</Text>
                            <InputField placeholder='Имя' val={text_fields.first_name} onChange={(val) => dispatch(handleEditProfileTextFields({ key: "first_name", val }))} />
                            <InputField placeholder='Фамилия' val={text_fields.last_name} onChange={(val) => dispatch(handleEditProfileTextFields({ key: "last_name", val }))} />
                            <InputField placeholder='Отчество' val={text_fields.subname} onChange={(val) => dispatch(handleEditProfileTextFields({ key: "subname", val }))} />
                            <InputField type={"number-pad"} mask={dateMask} placeholder='Дата рождения' val={text_fields.dob} onChange={(val) => dispatch(handleEditProfileTextFields({ key: "dob", val }))} />
                            <SelectField
                                current={select_fields.city}
                                fieldTextKey={"name"}
                                items={available_cities}
                                selectHandler={(val) => dispatch(handleEditProfileSelectFields({ key: "city", val }))}
                                val={available_cities.find(item => item.id === select_fields.city)?.name || ""}
                                placeholder={"Выберите город"}
                            />
                            <SelectField
                                current={select_fields.gender}
                                fieldTextKey={"name"}
                                items={available_genders}
                                selectHandler={(val) => dispatch(handleEditProfileSelectFields({ key: "gender", val }))}
                                val={available_genders.find(item => item.id === select_fields.gender)?.name || ""}
                                placeholder={"Ваш пол"}
                            />
                            <InputField hideValue placeholder='Придумайте пароль' val={text_fields.password || ""} onChange={(val) => dispatch(handleEditProfileTextFields({ key: "password", val }))} />
                            <InputField hideValue placeholder='Подтвердите пароль' val={text_fields.accept_password || ""} onChange={(val) => dispatch(handleEditProfileTextFields({ key: "accept_password", val }))} />
                            <InputField placeholder='E-mail' val={text_fields.email} onChange={(val) => dispatch(handleEditProfileTextFields({ key: "email", val }))} />
                            <MainButton disabled={state.disabled} handlePress={handleSendEditProfile}>
                                <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Далее</Text>
                            </MainButton>
                        </View>
                    </View>
                </AppContainer>
            </MainContainer >
        </ScrollView >
    )
}

