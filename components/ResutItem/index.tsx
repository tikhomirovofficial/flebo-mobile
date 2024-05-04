import React, { FC, useEffect } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { cs } from '../../common/styles'
import { BlueLink } from '../BlueLink'
import { DocumentApi } from '../../types/entities/documents.types'
import { normalizeDate } from '../../utils/forms/dates/normalizeDate'

type ResultItemProps = & DocumentApi

export const ResultItem: FC<ResultItemProps> = (props) => {
    return (
        <TouchableOpacity style={[cs.bgGray, cs.mainRadius, cs.spaceL, { padding: 24 }]}>
            <Text style={[cs.text, cs.fMed, cs.fzM, { width: "80%" }]}>{props.name} — Результаты анализов</Text>
            <View style={[cs.fRowBetw]}>
                <Text style={[cs.colorCaption, cs.fReg, cs.fzS]}>от {normalizeDate(props.created)}</Text>
                <BlueLink onPress={() => { }} title={"Смотреть"} />
            </View>
        </TouchableOpacity>
    )
}
