import React from 'react'
import { StatusBar } from "expo-status-bar";
import { View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import useFonts from './hooks/useFonts';
import { cs } from './common/styles';
import { WithNetwork } from './containers/WithNetwork';
import { ModalShadow } from './components/ModalShadow';
import { ModalsContainer } from './containers/ModalsContainer';

export const Root = () => {
    const [fontsLoaded] = useFonts();

    if (fontsLoaded) {
        return (
            <>

                <WithNetwork>
                    <AppNavigator />
                    <ModalsContainer />
                </WithNetwork>
                <StatusBar style={"auto"} />
            </>
        )
    }
    <View style={[cs.flexOne, cs.fCenterCol]}>
        <Text>Загрузка...</Text>
    </View>

}
