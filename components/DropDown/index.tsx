import React, { FC } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, Text, TouchableWithoutFeedback, ViewStyle } from 'react-native'
import { cs } from '../../common/styles'
import { DropDownIcon } from '../../icons'
import { SelectFieldProps } from '../SelectField'
import OutsidePressHandler from 'react-native-outside-press'

type DropDownProps = Pick<SelectFieldProps, "current" | "fieldTextKey" | "selectHandler" | "placeholder" | "items"> & {
    handleFocused: () => void,
    style?: ViewStyle | ViewStyle[],

}

export const DropDown: FC<DropDownProps> = ({ current, fieldTextKey = "name", style, placeholder, selectHandler, items, handleFocused }) => {
    const fieldKey = fieldTextKey as string
    const handleSelect = (val: number) => {
        selectHandler(val)
        handleFocused()
    }
    return (

        <OutsidePressHandler
            style={[cs.pAbs, styles.dropDownBlock, style]}
            onOutsidePress={handleFocused}>
            <View style={{ height: "100%" }}>
                <TouchableOpacity onPress={handleFocused} style={[cs.fRowBetw, cs.pRel, { paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: "rgba(69, 69, 69, 0.4)" }]}>
                    <Text style={[cs.inputText, cs.fzM, cs.colorDark]}>{placeholder}</Text>
                    <View style={[cs.fCenterCol]}>
                        <DropDownIcon height={6} width={12} />
                    </View>
                </TouchableOpacity>
                <FlatList showsVerticalScrollIndicator={true} data={items} renderItem={({ item, index }) => {
                    const untypedItem = item as any
                    return (
                        <TouchableOpacity onPress={item.id === current ? undefined : () => handleSelect(item.id)} style={{ paddingVertical: 6 }}>
                            <Text style={[cs.inputText, cs.fzM, (item.id === current ? { color: cs.blueLink.color } : cs.colorDark)]}>{`${index + 1}. ${untypedItem[fieldKey]}` || "Значение"}</Text>
                        </TouchableOpacity>
                    )
                }} nestedScrollEnabled contentContainerStyle={[cs.fColumn]} style={{ marginVertical: 10 }} />
            </View>



        </OutsidePressHandler>


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
        zIndex: 10,
        width: "100%",
        flex: 1,
        maxHeight: 240,
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