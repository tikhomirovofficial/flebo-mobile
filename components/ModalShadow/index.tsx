import React, { FC, useEffect } from 'react'
import Animated, { FadeIn, FadeOut, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useAppSelector } from '../../app/base/hooks'
import { TouchableWithoutFeedback, View } from 'react-native'

type ModalShadowProps = {
    show: boolean
}
export const ModalShadow: FC<ModalShadowProps> = ({ show }) => {
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(show ? 0.15 : 0, { duration: 400 });
    }, [show]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: `rgba(0, 0, 0, ${opacity.value})`,
        };
    });

    if (!show) {
        return null;
    }

    return <Animated.View
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}

        style={[
            {
                position: "absolute",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 100,
                width: "100%",
                flex: 1
            },
            animatedStyle
        ]}>

    </Animated.View>
}
