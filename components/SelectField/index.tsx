import React, { FC, useState } from 'react'
import { View, StyleSheet, TextInput, KeyboardType, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
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
    onChange: (val: string, unmasked?: string) => void,
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
    onChange,
    selectHandler
}) => {
    const [selected, setSelected] = useState<number>((current != undefined && current != -1 ? current : -1))
    const [focused, setFocused] = useState(isFocused || false)

    return (
        <View>
            <TouchableOpacity style={[styles.selectField, cs.fRowBetw, (val.length > 0 ? cs.filledBorderColor : null), (focused ? cs.focusedInput : null)]}>
                <TextInput
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    readOnly
                    value={val}
                    style={[cs.inputText, cs.fzM, cs.flexOne]}
                    nativeID={idInput}
                    onChangeText={onChange}
                    accessibilityLabelledBy={idInput}
                    placeholder={placeholder}
                />
                <View style={[cs.fCenterCol]}>
                    <DropDownIcon height={6} width={12} />
                </View>

            </TouchableOpacity>
            <DropDown fieldTextKey={fieldTextKey} items={items} current={selected} selectHandler={selectHandler} placeholder={placeholder} />
        </View >

    )
}
const styles = StyleSheet.create({
    selectField: {
        height: 60,
        paddingHorizontal: 28,
        position: "relative",
        borderStyle: "solid",
        borderRadius: 18,
        borderCurve: "continuous",
        borderWidth: 1,
        borderColor: "#A9A9A9"
    },
    dropDownBlock: {
        top: 0,
        left: 0,
        flex: 1,
        zIndex: 10,
        width: "100%",
        maxHeight: 250,
        paddingHorizontal: 28,
        paddingTop: 20,
        backgroundColor: "white",
        borderStyle: "solid",
        borderRadius: 18,
        borderCurve: "continuous",
        borderWidth: 1,
        overflow: "hidden",
        borderColor: "#A9A9A9"
    }
})