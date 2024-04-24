import React, { FC, ReactNode, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View, ViewStyle, Text, RefreshControl } from "react-native";
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
            <View style={[cs.flexOne, styles.scrollContainer, { backgroundColor: "transparent" }]}>
                <View style={[styles.containerWrapperScroll, { paddingTop: offsetViaPaddingTop }]}>
                    {topContent}
                    <View style={[styles.whiteContainer, style]}>
                        <AppContainer style={{ flex: 1 }}>
                            {children}
                        </AppContainer>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        minHeight: "100%"
    },

    baseView: {
        minHeight: "100%",
        backgroundColor: "black"
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