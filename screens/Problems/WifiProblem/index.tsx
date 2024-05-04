import React from 'react'
import { FC, useState, useEffect } from "react";
import { Keyboard, View, ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { cs } from '../../../common/styles';
import { WifiProblemIcon } from '../../../icons';
import { fs } from '../../../navigation/AppNavigator';
import AppContainer from '../../../components/AppContainer';
import MainButton from '../../../components/MainButton';

type WifiProblemProps = {
    refreshState: () => any
}
export const WifiProblem: FC<WifiProblemProps> = ({ refreshState }) => {

    return (
        <View style={[cs.flexOne, cs.fCenterCol]}>
            <AppContainer>
                <View style={[cs.fColumn, cs.spaceM, cs.fAlCenter]}>
                    <WifiProblemIcon />
                    <Text style={[cs.fzS, fs.montR, cs.fMed, cs.txtCenter]}>Отсутствует подключение к интернету. Пожалуйста проверьте настройки сети</Text>
                    <MainButton handlePress={refreshState}>
                        <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Далее</Text>
                    </MainButton>
                </View>
            </AppContainer>

        </View>
    )
}
