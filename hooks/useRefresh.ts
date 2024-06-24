import { useAppDispatch, useAppSelector } from "../app/base/hooks";
import { getAllDoctors, resetAllDoctors } from "../app/features/doctors/doctorsSlice";
import { getAllDocuments, resetAllDocuments } from "../app/features/documents/documentsSlice";
import { getAllHistory, resetHistory } from "../app/features/history/historySlice";
import { getProfile, resetProfileData } from "../app/features/profile/profileSlice";
import { useState } from "react";

export const useRefresh = () => {
    const dispatch = useAppDispatch()
    const { doctors, documents, profile, history } = useAppSelector(state => state)
    const [refreshing, setRefreshing] = useState(false)

    const refresh = () => {
        setRefreshing(true)
        dispatch(resetAllDocuments())
        dispatch(resetAllDoctors())
        dispatch(resetHistory())
        dispatch(getProfile())
        dispatch(getAllDocuments({ part: 1 }))
        dispatch(getAllDoctors({ part: 1 }))
        dispatch(getAllHistory({ part: 1 }))
        setRefreshing(false)
    }

    return {
        refreshing: refreshing && (documents.all.loading || history.all.loading || profile.loadings.profile || doctors.all.loading),
        sendRefresh: refresh
    }
}