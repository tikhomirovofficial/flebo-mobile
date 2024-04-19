import React, { FC } from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import { cs } from '../../common/styles'
import { DoctorThingIcon, ArrowRight } from '../../icons'

type DoctorItemProps = {
    image: ImageBitmap
}

export const DoctorItem: FC<DoctorItemProps> = ({ image }) => {
    return (
        <View style={[{ backgroundColor: "#FAFBFD", padding: 16, borderRadius: 10 }, cs.fColumn, cs.spaceL]}>
            <View style={[cs.fRow, cs.spaceS]}>
                <View style={[{ overflow: "hidden", borderRadius: 10 }]}>
                    <ImageBackground style={[{ width: 60, height: 60 }]} resizeMode={"cover"}
                        source={image} />
                </View>
                <View style={[cs.fColumn]}>
                    <Text style={[cs.fSemi, cs.fzM]}>Чатинян Гарик Артурович</Text>
                    <Text style={[cs.fReg, cs.fzS]}>Стаж 6 лет</Text>
                    <View style={[cs.spaceXS, cs.fAlCenter, cs.fRow]}>
                        <DoctorThingIcon />
                        <Text style={[cs.fReg, cs.fzS]}>Врач-флеболог</Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: "#EBEBEB" }}></View>
            <View style={[cs.fRowBetw]}>
                <View style={[cs.spaceXS, cs.fAlCenter, cs.fRow]}>
                    <Text style={[cs.fzXS, cs.fMed, { color: cs.blueLink.color }]}>Подробнее</Text>
                    <ArrowRight />
                </View>
                <TouchableOpacity style={[{ paddingVertical: 16, paddingHorizontal: 30, borderRadius: 10, borderColor: "#0BA0B5", borderWidth: 1 }]}>
                    <Text style={[cs.fzXS, cs.fSemi, { color: cs.blueLink.color }]}>Запись на приём</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
