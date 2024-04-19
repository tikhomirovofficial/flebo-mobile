import React, { FC } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { cs } from '../../common/styles'

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
                <TouchableOpacity>
                    <Text style={[cs.fzS, cs.blueLink, cs.fSemi]}>Смотреть</Text>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    )
}
