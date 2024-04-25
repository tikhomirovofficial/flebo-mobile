import React, { FC } from 'react'
import { TouchableOpacity, Text, ViewStyle } from 'react-native'
import { cs } from '../../common/styles'

type BlueLinkProps = {
    onPress: () => void,
    title: string,
    style?: ViewStyle | ViewStyle[],
}

export const BlueLink: FC<BlueLinkProps> = ({ onPress, title, style }) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={[cs.fzS, cs.blueLink, cs.fSemi]}>{title}</Text>
        </TouchableOpacity>
    )
}
