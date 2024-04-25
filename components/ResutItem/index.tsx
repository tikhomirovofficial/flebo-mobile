import React, { FC } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { cs } from '../../common/styles'
import { BlueLink } from '../BlueLink'

type ResultItemProps = {
    full_name: string,
    date: string
}

export const ResultItem: FC<ResultItemProps> = ({ full_name, date }) => {
    return (
        <TouchableOpacity style={[cs.bgGray, cs.mainRadius, cs.spaceL, { padding: 24 }]}>
            <Text style={[cs.text, cs.fMed, cs.fzM, { width: "80%" }]}>{full_name} — Результаты анализов</Text>
            <View style={[cs.fRowBetw]}>
                <Text style={[cs.colorCaption, cs.fReg, cs.fzS]}>от {date}</Text>
                <BlueLink onPress={() => { }} title={"Смотреть"} />

            </View>
        </TouchableOpacity>
    )
}
