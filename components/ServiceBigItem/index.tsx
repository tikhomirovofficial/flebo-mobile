import React, { FC } from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { cs } from '../../common/styles'
import { PenDrawedUnderIcon } from '../../icons'
import MainButton from '../MainButton'

type ServiceBigItemProps = {
    title: string,
    image: ImageBitmap
}

export const ServiceBigItem: FC<ServiceBigItemProps> = ({ title, image }) => {
    return (
        <View style={[{ width: "100%" }, cs.spaceS]}>
            <View>
                <View style={[cs.mainRadius, { overflow: "hidden" }]}>
                    <ImageBackground style={[{ width: "100%", height: 290 }]} resizeMode={"cover"}
                        source={image} />
                </View>
                <View style={[{ padding: 24 }, cs.fColumn, cs.spaceM]}>
                    <Text style={[cs.fzXL, cs.fBold]}>{title}</Text>
                    <Text style={[cs.text, { width: "85%", marginBottom: 24 }]}>Короткое описание услуги на несколько строчек, чтобы объяснить о чем тут речь</Text>
                </View>
            </View>
            <MainButton style={[cs.spaceS]} handlePress={() => { }}>
                <PenDrawedUnderIcon height={16} width={14} stroke={"white"} />
                <Text style={[cs.txtCenter, cs.fzM, cs.colorWhite, cs.fSemi]}>Записаться на прием</Text>
            </MainButton>
        </View>
    )
}
