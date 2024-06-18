import React from 'react'
import { ModalShadow } from '../../components/ModalShadow'
import { useAppSelector } from '../../app/base/hooks'

export const ModalsContainer = () => {
    const { modals } = useAppSelector(state => state)
    const modalsValues = Object.values(modals)
    return (
        <>
            {
                modalsValues.some(item => item) ? <ModalShadow show /> : null
            }
        </>
    )
}
