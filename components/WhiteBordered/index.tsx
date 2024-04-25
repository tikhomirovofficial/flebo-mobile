import React, { FC, ReactNode, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View, ViewStyle, Text, RefreshControl, TouchableWithoutFeedback } from "react-native";
import AppContainer from "../../components/AppContainer";
import { cs } from "../../common/styles";
import { useAppSelector } from '../../app/base/hooks';


type WhiteBorderedProps = {
    children: ReactNode,
    scrollable?: boolean
    style?: ViewStyle | ViewStyle[],
    isModal?: boolean
    topContent?: ReactNode,
    modalLevel?: number,
    onRefresh?: () => any,
    refreshing?: boolean,
}

const WhiteBorderedLayout: FC<WhiteBorderedProps> = ({
    children,
    topContent,
    style,
    onRefresh,
    modalLevel = 1,
}) => {
    const offsetViaPaddingTop = modalLevel > 1 ? (80 + (modalLevel * 12)) : 80

    return (

        <View style={[styles.baseView, { backgroundColor: "rgba(0, 0, 0, 0.0)" }]}>
            {/* <TouchableWithoutFeedback style={[cs.pAbs, { top: 0, left: 0, zIndex: 1 }]} onPress={() => alert("da")}>
                <View style={[{ backgroundColor: "blue", width: "100%", height: "100%" }]}></View>
            </TouchableWithoutFeedback> */}
            <ScrollView >
                <View style={[cs.flexOne, cs.pRel, styles.scrollContainer, { backgroundColor: "transparent" }]}>
                    <View style={[styles.containerWrapperScroll, { paddingTop: offsetViaPaddingTop }]}>
                        {topContent}
                        <View style={[styles.whiteContainer, style]}>
                            <AppContainer style={{ flex: 1 }}>
                                {children}
                            </AppContainer>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        minHeight: "100%"
    },

    baseView: {
        minHeight: "100%",
        position: "relative",
    },
    containerWrapper: {
        flex: 1,
    },
    containerWrapperScroll: {
        display: "flex",
        minHeight: "100%",
        gap: 16,
        flex: 1,
        paddingTop: 80,
        justifyContent: "flex-end",
        flexDirection: "column"

    },
    whiteContainer: {
        backgroundColor: "white",
        shadowColor: "black",
        paddingTop: 22,
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowOpacity: 0.1,
        maxHeight: "100%",
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})
export default WhiteBorderedLayout;