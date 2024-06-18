import React, { FC } from 'react'
import { ScrollView } from 'react-native'
import { HasNodeChildren } from '../../types/common.types'

export const RefreshContainer: FC<HasNodeChildren> = ({ children }) => {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    )
}
