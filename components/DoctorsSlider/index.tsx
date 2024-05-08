import React, { FC, useRef, useState } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { cs } from '../../common/styles'
import { ArrowBlockLeft, ArrowBlockRight } from '../../icons'
import { containerStyles } from '../AppContainer'
import { DoctorItem } from '../DoctorItem'
import { NavProps } from '../../types/common.types'
import { useAppSelector } from '../../app/base/hooks'

const SLIDE_WIDTH = containerStyles.container.maxWidth
const slidesData = [1, 1, 1, 1]

export const DoctorsSlider: FC<NavProps> = ({ navigation }) => {
    const { all } = useAppSelector(state => state.doctors)
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef<any>(null)

    const updateCurrentSlide = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x
        const slideNumber = Math.round(contentOffsetX / SLIDE_WIDTH)
        setCurrentSlide(slideNumber)

    }
    const changeCurrentSlide = (slideNumber: number) => {
        const maxSlideIndex = slidesData.length - 1
        if (slideNumber < 0) {
            slideNumber = maxSlideIndex
        }
        if (slideNumber > maxSlideIndex) {
            slideNumber = 0
        }
        const offset = SLIDE_WIDTH * slideNumber
        sliderRef.current?.scrollToOffset({ offset })
        setCurrentSlide(slideNumber)
    }
    return (
        <View style={[cs.fColumn, cs.spaceS]}>
            <FlatList
                ref={sliderRef}
                data={slidesData}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd={e => updateCurrentSlide(e)}
                bounces={false}
                renderItem={() => (
                    <View style={{ maxWidth: containerStyles.container.maxWidth }}>
                        <DoctorItem navigation={navigation} {...all.items[0]} />
                    </View>

                )}
            />
            <View style={[cs.fAlCenter]}>
                <View style={[cs.fRowBetw, cs.fAlCenter, { maxWidth: 154 }]}>
                    <TouchableOpacity onPress={() => changeCurrentSlide(currentSlide - 1)} style={[cs.btnShadow, { maxWidth: 32, borderRadius: 6 }]}>
                        <ArrowBlockLeft width={32} height={32} />
                    </TouchableOpacity>
                    <Text style={[cs.text, cs.txtCenter, { width: 70 }]}>{currentSlide + 1}/{slidesData.length}</Text>
                    <TouchableOpacity onPress={() => changeCurrentSlide(currentSlide + 1)} style={[cs.btnShadow, { maxWidth: 32, borderRadius: 6 }]}>
                        <ArrowBlockRight width={32} height={32} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
