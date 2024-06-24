import React, { FC } from 'react'
import { RefreshControl, ScrollView, ViewStyle } from 'react-native'
import { HasNodeChildren } from '../../types/common.types'

type RefreshContainerProps = {
    onRefresh: () => any
    refreshing: boolean,
    style?: ViewStyle | ViewStyle[]
}
export const RefreshContainer: FC<HasNodeChildren & RefreshContainerProps> = ({ children, refreshing, onRefresh, style }) => {
    const openedSome = false
    return (
        <ScrollView contentContainerStyle={[style]} nestedScrollEnabled={true} refreshControl={
            onRefresh !== undefined && !openedSome ? <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            /> : undefined}
        >
            {children}
        </ScrollView>
    )
}
