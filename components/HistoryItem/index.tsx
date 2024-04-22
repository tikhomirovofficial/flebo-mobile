import React, { FC } from 'react'
import { View, ImageBackground, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { cs } from '../../common/styles'

type HistoryItemProps = {
    leftTopLabel: string
    rightTopLabel: string
    description: string
    isDark?: boolean

}

export const HistoryItem: FC<HistoryItemProps> = ({ leftTopLabel, rightTopLabel, description, isDark = false }) => {
    return (
        <View style={[styles.historyItem, cs.fColumn, cs.spaceL, (!isDark ? styles.historyLightItem : styles.historyDarkItem)]}>
            <View style={[cs.fRowBetw]}>
                <Text style={[cs.fSemi, cs.colorDark, cs.fzS]}>{leftTopLabel}</Text>
                <Text style={[cs.fSemi, cs.colorDark, cs.fzS]}>{rightTopLabel}</Text>
            </View>
            <Text style={[cs.fSemi, cs.colorDark, cs.fzS]}>{description}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    historyItem: {
        padding: 16,

    },
    historyLightItem: {
        backgroundColor: "rgba(11, 160, 181, 0.2)",
    },
    historyDarkItem: {
        backgroundColor: "rgba(11, 160, 181, 0.4)"
    }
})