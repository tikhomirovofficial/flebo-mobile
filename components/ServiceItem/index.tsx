import React, { FC } from 'react'
import { View, ImageBackground, Text, ViewStyle, TouchableOpacity } from 'react-native'
import { cs } from '../../common/styles'
import { BlueLink } from '../BlueLink'

type ServiceItemProps = {
    title: string,
    image: ImageBitmap,
    style?: ViewStyle | ViewStyle[],
}

export const ServiceItem: FC<ServiceItemProps> = ({ title, image, style }) => {
    return (
        <TouchableOpacity style={[{ width: 128 }, cs.bgGray, cs.mainRadius, style]}>
            <View style={[cs.mainRadius, { overflow: "hidden" }]}>
                <ImageBackground style={[{ width: "100%", height: 115 }]} resizeMode={"cover"}
                    source={image} />
            </View>
            <View style={[{ padding: 16 }, cs.fColumn, cs.spaceL]}>
                <Text style={[cs.fzM, cs.fBold]}>{title}</Text>
                <BlueLink onPress={() => { }} title={"Смотреть"} />
            </View>
        </TouchableOpacity>
    )
}
