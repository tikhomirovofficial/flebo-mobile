import React, { FC, useState } from 'react'
import { View, StyleSheet, TextInput, KeyboardType, Text, TouchableOpacity } from 'react-native'
import MaskInput, { Mask } from 'react-native-mask-input'
import { cs } from '../../common/styles'
import { EyeClosed, EyeOpened } from '../../icons'

type InputFieldProps = {
    mask?: string | RegExp | RegExp[] | (string | RegExp)[],
    idInput?: string,
    error?: string,
    placeholder?: string
    hideValue?: boolean
    type?: KeyboardType
    val: string,
    onChange: (val: string, unmasked?: string) => void

}
export const InputField: FC<InputFieldProps> = ({ mask, placeholder, val, type, onChange, idInput, error, hideValue }) => {
    const [focused, setFocused] = useState(false)
    const [hiddenVal, setHiddenVal] = useState(hideValue || false)


    if (mask) {
        return (
            <MaskInput
                mask={mask as Mask}
                value={val}
                secureTextEntry={hideValue}
                keyboardType={type}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                nativeID={idInput}
                onChangeText={onChange}
                accessibilityLabelledBy={idInput}
                placeholder={placeholder}
                style={[styles.inputField, cs.inputText, cs.fzM, (val.length > 0 ? cs.filledBorderColor : null), (focused ? cs.focusedInput : null), (error ? [cs.errBorderColor, cs.colorRed] : null)]} />
        )
    }

    return (
        <View style={[cs.pRel]}>
            {
                hideValue !== undefined && val.length > 0 ?
                    <TouchableOpacity
                        onPress={() => setHiddenVal(!hiddenVal)}
                        style={[cs.pAbs, cs.fCenterCol, { height: 30, width: 30, zIndex: 3, right: "8%", top: "50%", transform: [{ translateY: -15 }] }]}>
                        {
                            !hiddenVal ?
                                <EyeClosed /> : <EyeOpened />
                        }
                    </TouchableOpacity>
                    : null}
            <TextInput
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={val}
                keyboardType={type}
                secureTextEntry={hiddenVal}
                nativeID={idInput}
                onChangeText={onChange}
                accessibilityLabelledBy={idInput}
                placeholder={placeholder}
                style={[styles.inputField, cs.inputText, cs.fzM, (val.length > 0 ? cs.filledBorderColor : null), (focused ? cs.focusedInput : null), (error ? [cs.errBorderColor, cs.colorRed] : null)]} />
        </View>

    )
}
const styles = StyleSheet.create({
    inputField: {
        height: 60,
        paddingHorizontal: 28,
        borderStyle: "solid",
        borderRadius: 18,
        borderCurve: "continuous",
        borderWidth: 1,
        borderColor: "#A9A9A9"
    },
})