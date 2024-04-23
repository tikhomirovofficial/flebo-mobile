import React, { FC } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { cs } from '../../common/styles'
import { DropDownIcon } from '../../icons'
import { SelectFieldProps } from '../SelectField'

type DropDownProps = Pick<SelectFieldProps, "current" | "fieldTextKey" | "selectHandler" | "placeholder" | "items">

export const DropDown: FC<DropDownProps> = ({ current, fieldTextKey, placeholder, selectHandler, items }) => {
    const fieldKey = fieldTextKey as string
    return (
        <View style={[cs.pAbs, styles.dropDownBlock]}>
            <TouchableOpacity style={[cs.fRowBetw, { paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: "rgba(69, 69, 69, 0.4)" }]}>
                <Text style={[cs.inputText, cs.fzM, cs.colorDark]}>{placeholder}</Text>
                <View style={[cs.fCenterCol]}>
                    <DropDownIcon height={6} width={12} />
                </View>
            </TouchableOpacity>

            <FlatList showsVerticalScrollIndicator={false} data={items} renderItem={({ item }) => {
                const untypedItem = item as any
                return (
                    <TouchableOpacity onPress={item.id === current ? undefined : () => selectHandler(item.id)} style={{ paddingVertical: 6 }}>
                        <Text style={[cs.inputText, cs.fzM, (item.id === current ? { color: cs.blueLink.color } : cs.colorDark)]}>{untypedItem[fieldKey] || "Значение"}</Text>
                    </TouchableOpacity>
                )
            }} nestedScrollEnabled contentContainerStyle={[cs.fColumn]} style={{ marginVertical: 20 }} />
        </View>
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
