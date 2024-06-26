import React, { FC, useEffect, useRef, useState } from 'react'
import { View, StyleSheet, TextInput, KeyboardType, Text, TouchableOpacity, FlatList, ScrollView, TouchableWithoutFeedback, TouchableWithoutFeedbackComponent } from 'react-native'
import { cs } from '../../common/styles'
import { DropDownIcon } from '../../icons'
import { DropDown } from '../DropDown'

export type SelectFieldProps = {
    items: any[]
    idInput?: string,
    current?: number,
    fieldTextKey?: string,
    isFocused?: boolean
    placeholder?: string
    val: string,
    selectHandler: (val: number) => void,

}
export const SelectField: FC<SelectFieldProps> = ({
    items,
    placeholder,
    val,
    current,
    fieldTextKey,
    isFocused,
    idInput,
    selectHandler
}) => {
    const [focused, setFocused] = useState(isFocused || false)
    const ref = useRef<any>(null);

    const handleFocused = () => setFocused(!focused)

    const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            console.log('Clicked outside');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handleClickOutside}>
            <View style={{ zIndex: focused ? 20 : 0 }}>
                <TouchableOpacity onPress={handleFocused} style={[styles.selectField, cs.fRowBetw, (val.length > 0 ? cs.filledBorderColor : null), (focused ? cs.focusedInput : null)]}>
                    <TextInput
                        readOnly
                        value={val}
                        style={[cs.inputText, cs.colorDark, cs.fzM, cs.flexOne]}
                        nativeID={idInput}
                        accessibilityLabelledBy={idInput}
                        placeholder={placeholder}
                    />
                    <View style={[cs.fCenterCol]}>
                        <DropDownIcon height={6} width={12} />
                    </View>
                </TouchableOpacity>
                {
                    focused ?
                        <DropDown
                            handleFocused={handleFocused}
                            fieldTextKey={fieldTextKey}
                            items={items}
                            current={current}
                            selectHandler={selectHandler}
                            placeholder={placeholder} /> :
                        null
                }

            </View >
        </TouchableWithoutFeedback>


    )
}
const styles = StyleSheet.create({
    selectField: {
        height: 60,
        paddingHorizontal: 28,
        borderStyle: "solid",
        borderRadius: 18,
        borderCurve: "continuous",
        borderWidth: 1,
        borderColor: "#A9A9A9"
    }
})