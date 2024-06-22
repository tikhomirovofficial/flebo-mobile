import React, { FC } from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { HasNodeChildren } from '../../types/common.types'

type RefreshContainerProps = {
    onRefresh: () => any
    refreshing: boolean
}
export const RefreshContainer: FC<HasNodeChildren & RefreshContainerProps> = ({ children, refreshing, onRefresh }) => {
    const openedSome = false
    return (
        <ScrollView nestedScrollEnabled={true} refreshControl={
            onRefresh !== undefined && !openedSome ? <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            /> : undefined}
        >
            {children}
        </ScrollView>
    )
}
