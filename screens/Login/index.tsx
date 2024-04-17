import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import AppContainer from '../../components/AppContainer';
import { cs } from '../../common/styles';

export const Login = () => {
    return (
        <AppContainer style={{ height: "100%" }}>
            <View style={[{ backgroundColor: "green" }, cs.flexOne, cs.fColumnBetw]}>
                <View style={{ height: 20 }}></View>
                <View style={[{flex: 0.86}, cs.fColumnBetw]}>
                    <View style={{ backgroundColor: "black", height: 20, flex: 0.8 }}></View>
                    <View style={{ backgroundColor: "black", height: 20 }}></View>
                </View>

            </View>
        </AppContainer>
    )
}
