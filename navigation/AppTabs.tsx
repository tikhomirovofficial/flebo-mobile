import React, { FC } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { cs } from "../common/styles";
import { fs } from "./AppNavigator";
import { BackIcon, HeartIcon, HomeIcon, PhoneIcon, ProfileIcon, ServicesIcon } from "../icons";
import { routesNames } from "./routes";
import AppContainer from "../components/AppContainer";

const AppTab: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    return (

        <View key={state.index} style={[cs.dF, cs.fRow, styles.tabsContainer]}>
            <AppContainer style={cs.fRowBetw}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;
                    const TabIcon = () => {
                        console.log(route.name);

                        switch (route.name) {
                            case "main":
                                return <HomeIcon height={22} stroke={isFocused ? "#0BA0B5" : "#454545"} />
                            case "doctors":
                                return <HeartIcon height={22} stroke={isFocused ? "#0BA0B5" : "#454545"} />
                            case "support":
                                return <PhoneIcon height={22} width={24} stroke={isFocused ? "#0BA0B5" : "#454545"} />
                            case "services":
                                return <ServicesIcon height={22} width={22} stroke={isFocused ? "#0BA0B5" : "#454545"} />
                            case "profile":
                                return <ProfileIcon height={22} width={16} stroke={isFocused ? "#0BA0B5" : "#454545"} />
                        }
                        return <BackIcon />
                    }
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[cs.fAlCenter, cs.spaceS]}
                        >

                            <TabIcon />
                            <Text style={[{ color: isFocused ? '#0BA0B5' : "#454545" }, cs.fzXS, cs.fReg,]}>
                                {routesNames[route.name] || ""}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </AppContainer>

        </View>
    );
}
const styles = StyleSheet.create({
    tabsContainer: {
        justifyContent: "space-around",
        paddingVertical: 20,
        backgroundColor: "white",
        borderTopColor: "rgba(53, 53, 53, 0.10)",
        borderTopWidth: 1
    }
})
export default AppTab