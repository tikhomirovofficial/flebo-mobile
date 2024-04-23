import React, { FC } from 'react'
import { StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';
import { ArrowBlockLeft, ArrowBlockRight, ArrowRight, BackIcon, DocsIcon, DoctorThingIcon, HistoryIcon, MenuIcon, PenDrawedIcon, PenDrawedUnderIcon, PlanIcon, ProfileIcon, SearchIcon } from '../../icons';
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
const DoctorImage = require('../../assets/images/doctor.jpg')

export const DoctorProfile: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()

    return (
        <ScrollView>
            <MainContainer>
                <AppContainer style={[cs.fColumn, cs.spaceXL]}>
                    <TouchableOpacity>
                        <BackIcon />
                    </TouchableOpacity>
                    <Text style={[cs.title]}>Врач</Text>
                    <View style={[cs.fColumn, { gap: 64 }]}>
                        <View style={[cs.fColumn, cs.spaceXL]}>
                            <View style={[cs.fColumn, cs.spaceM]}>
                                <View style={[cs.fRowBetw, cs.spaceS]}>
                                    <View style={[{ overflow: "hidden", borderRadius: 10 }]}>
                                        <ImageBackground style={[{ width: 88, height: 88 }]} resizeMode={"cover"}
                                            source={DoctorImage} />
                                    </View>
                                    <View style={[cs.fColumn, cs.jcCenter, { borderColor: "#0BA0B5", borderWidth: 1, borderRadius: 15, flex: 1, paddingHorizontal: 24 }]}>
                                        <Text style={[cs.text]}>Профессиональный стаж</Text>
                                        <Text style={[cs.subTitle, { color: cs.blueLink.color }]}>15 лет</Text>
                                    </View>
                                </View>
                                <View style={[cs.fColumn]}>
                                    <Text style={[cs.fSemi, cs.fzM]}>Чатинян Гарик Артурович</Text>
                                    <Text style={[cs.fReg, cs.fzS]}>Стаж 6 лет</Text>
                                    <View style={[cs.spaceXS, cs.fAlCenter, cs.fRow]}>
                                        <DoctorThingIcon />
                                        <Text style={[cs.fReg, cs.fzS]}>Врач-флеболог</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={[cs.fColumn, cs.spaceM]}>
                                <View style={[cs.fColumn, cs.spaceM, cs.bgGray, { padding: 24, borderRadius: 30 }]}>
                                    <View style={[cs.fRowBetw, cs.spaceS, cs.fAlCenter]}>
                                        <Text style={[cs.fMed, cs.fzXL]}>Стоимость услуг</Text>
                                        <Text style={[cs.fMed, cs.fzXS, cs.colorGray]}>Цена, Р</Text>
                                    </View>
                                    <View style={[cs.fRowBetw, cs.spaceS, cs.fAlCenter]}>
                                        <Text style={[cs.fReg, cs.fzS]}>Первичный приём</Text>
                                        <Text style={[cs.fReg, cs.fzS]}>2 400</Text>
                                    </View>
                                    <Text style={[cs.colorGray, cs.fzXS, cs.fReg]}>Актуальную информацию можно уточнить по телефону: 8 800 555 3 555 (звонок бесплатный).</Text>
                                </View>
                                <MainButton handlePress={() => { }}><Text style={[cs.colorWhite, cs.fSemi, cs.fzM]}>Записаться</Text></MainButton>
                            </View>
                        </View>
                        <View style={[cs.fColumn, cs.spaceL]}>
                            <Text style={[cs.colorDark, cs.fzXL, cs.fBold]}>Образование</Text>
                            <Text style={[cs.text]}>Ординатура по специальности нейрохирургия под руководством проф. Ш.М. Сафина на кафедре нейрохирургии БГМУ.</Text>
                        </View>
                        <View style={[cs.fColumn, cs.spaceL]}>
                            <Text style={[cs.colorDark, cs.fzXL, cs.fBold]}>Дополнительное образование:</Text>
                            <Text style={[cs.text]}>2020 г. Профессиональная программа "Нейрохирургия", Сертификационный курс по специальности «нейрохирургия», Российская Медицинская Академия Последипломного образования</Text>
                        </View>
                        <View style={[cs.fColumn, cs.spaceL]}>
                            <Text style={[cs.colorDark, cs.fzXL, cs.fBold]}>Специализация:</Text>
                            <Text style={[cs.text]}>Лечение геморроя метолом латексного лигирования геморроидальных узлов
                                Удаление хронической анальной трещины
                                Современные методы консервативной терапии трещин</Text>
                        </View>
                        <View style={[cs.fColumn, cs.spaceXL]}>
                            <View style={[cs.fColumn, cs.fAlCenter, cs.spaceM]}>
                                <Text style={[cs.subTitle, cs.colorDark, cs.txtCenter, { maxWidth: 218 }]}>Другие специалисты нашей клиники</Text>
                                <Text style={[cs.text, cs.txtCenter]}>Приём пациентов ведут высококвалифицированные врачи, за плечами которых длительная практика и широкие знания в своей сфере.</Text>
                            </View>
                            <View style={[cs.fColumn, cs.spaceXL]}>
                                <View style={[cs.fColumn, cs.spaceS]}>
                                    <View>
                                        <DoctorItem image={DoctorImage} />
                                    </View>
                                    <View style={[cs.fAlCenter]}>
                                        <View style={[cs.fRowBetw, cs.fAlCenter, cs.spaceXL, { maxWidth: 154 }]}>
                                            <TouchableOpacity style={[cs.btnShadow, { maxWidth: 32, borderRadius: 6 }]}>
                                                <ArrowBlockLeft width={32} height={32} />
                                            </TouchableOpacity>
                                            <Text style={[cs.text]}>1/30</Text>
                                            <TouchableOpacity style={[cs.btnShadow, { maxWidth: 32, borderRadius: 6 }]}>
                                                <ArrowBlockRight width={32} height={32} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                                <View style={[cs.fAlCenter]}>
                                    <TouchableOpacity style={{ maxWidth: 154 }}>
                                        <Text style={[cs.blueLink, cs.fSemi]}>Смотреть всех врачей</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>

                    </View>

                </AppContainer>
            </MainContainer >
        </ScrollView >
    )
}

