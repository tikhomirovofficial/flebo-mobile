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
    onOutsideClick?: () => any,
    refreshing?: boolean,
    likeBottomSheet?: {
        maxHeight: number,
    }
}

const WhiteBorderedLayout: FC<WhiteBorderedProps> = ({
    children,
    topContent,
    style,
    onOutsideClick,
    modalLevel = 1,
    likeBottomSheet,
}) => {
    const offsetViaPaddingTop = modalLevel > 1 ? (80 + (modalLevel * 12)) : 80

    return (
        <TouchableWithoutFeedback onPress={onOutsideClick}>
            <View style={[styles.baseView, { backgroundColor: "rgba(0, 0, 0, 0.0)" }]}>
                {/* <TouchableWithoutFeedback style={[cs.pAbs, { top: 0, left: 0, zIndex: 1 }]} onPress={() => alert("da")}>
                    <View style={[{ backgroundColor: "blue", width: "100%", height: "100%" }]}></View>
                </TouchableWithoutFeedback> */}
                {
                    likeBottomSheet ?
                        <View style={[cs.flexOne, cs.pRel, { justifyContent: "flex-end" }]}>
                            <View style={[styles.containerWrapper, { maxHeight: likeBottomSheet.maxHeight }]}>
                                {topContent}
                                <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
                                    <View style={[styles.whiteContainer, style]}>
                                        <AppContainer style={{ flex: 1 }}>
                                            {children}
                                        </AppContainer>
                                    </View>
                                </TouchableWithoutFeedback>

                            </View>
                        </View>
                        :
                        <ScrollView >
                            <View style={[cs.flexOne, cs.pRel, styles.scrollContainer]}>
                                <View style={[styles.containerWrapperScroll, { paddingTop: offsetViaPaddingTop }]}>
                                    {topContent}
                                    <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
                                        <View style={[styles.whiteContainer, style]}>
                                            <AppContainer style={{ flex: 1 }}>
                                                {children}
                                            </AppContainer>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </ScrollView>
                }
            </View>
        </TouchableWithoutFeedback >

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
    containerWrapperScroll: {
        display: "flex",
        minHeight: "100%",
        gap: 16,
        flex: 1,
        paddingTop: 80,
        justifyContent: "flex-end",
        flexDirection: "column"

    },
    containerWrapper: {
        display: "flex",
        gap: 16,
        flex: 1,
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