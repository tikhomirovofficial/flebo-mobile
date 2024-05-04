import React from 'react'
import { StatusBar } from "expo-status-bar";
import { View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import useFonts from './hooks/useFonts';
import { cs } from './common/styles';
import { WithNetwork } from './containers/WithNetwork';

export const Root = () => {
    const [fontsLoaded] = useFonts();

    if (fontsLoaded) {
        return (
            <>
                <StatusBar style={"auto"} />
                <WithNetwork>
                    <AppNavigator />
                </WithNetwork>
            </>
        )
    }
    <View style={[cs.flexOne, cs.fCenterCol]}>
        <Text>Загрузка...</Text>
    </View>

}
