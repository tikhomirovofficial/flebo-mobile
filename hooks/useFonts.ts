import React, { useState } from 'react';
import * as Font from "expo-font";

async function loadFonts() {
    await Font.loadAsync({
        'ProximaNovaRegular': require('../assets/fonts/ProximaNovaExCn-Regular.ttf'),
        'RalewayRegular': require('../assets/fonts/Raleway-Regular.ttf'),
        'RalewayMedium': require('../assets/fonts/Raleway-Medium.ttf'),
        'RalewaySemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
        'RalewayBold': require('../assets/fonts/Raleway-Bold.ttf'),
    })
}

const useFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
        loadFonts().then(() => {
            setFontsLoaded(true);
        });
    }
    return [fontsLoaded]
};

export default useFonts;