import React, { FC } from 'react'
import Animated, { FadeIn } from 'react-native-reanimated'
import { useAppSelector } from '../../app/base/hooks'
import { TouchableWithoutFeedback, View } from 'react-native'

type ModalShadowProps = {
    show: boolean
}
export const ModalShadow: FC<ModalShadowProps> = ({ show }) => {
    if (!show) {
        return null

    }
    return <Animated.View entering={FadeIn.duration(500)} style={[{ position: "absolute", height: "100%", top: 0, left: 0, width: "100%", backgroundColor: show ? "rgba(0, 0, 0, 0.05)" : "white", }]}>

    </Animated.View>
}
