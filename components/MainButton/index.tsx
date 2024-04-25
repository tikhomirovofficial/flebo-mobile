import React, { FC, ReactNode } from 'react';
import { cs } from "../../common/styles";
import { StyleSheet, Text, TouchableOpacity, ViewStyle, View } from "react-native";

type ButtonYellowProps = {
    children: ReactNode,
    isFilled?: boolean,
    style?: ViewStyle | ViewStyle[],
    disabled?: boolean,
    handlePress: () => any
}
const MainButton: FC<ButtonYellowProps> = ({ children, handlePress, style, isFilled = true, disabled }) => {
    if (disabled) {
        return (
            <View style={[cs.mainBtn, cs.fCenterCol, cs.bgDisabled, style]}>
                {children}
            </View>
        )

    }
    if (isFilled) {
        return (
            <TouchableOpacity style={[cs.mainBtn, cs.fCenterRow, { backgroundColor: "#0BA0B5" }, style]} onPress={handlePress}>
                {children}
            </TouchableOpacity>
        );
    }
    return (
        <TouchableOpacity onPress={handlePress} style={[cs.mainBtn, cs.fCenterRow, styles.unfilledButton, style]}>
            {children}
        </TouchableOpacity>
    )

};
const styles = StyleSheet.create({
    unfilledButton: {
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderColor: "#A9A9A9",
        borderWidth: 1
    }
})
export default MainButton;