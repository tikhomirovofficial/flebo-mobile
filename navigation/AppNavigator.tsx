import React, { FC, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useAppDispatch, useAppSelector } from '../app/base/hooks';
import { Login } from '../screens/Login';
import { RestorePassword } from '../screens/RestorePassword';
import { Register } from '../screens/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavProps } from '../types/common.types';
import AppTab from './AppTabs';
import { Hub } from '../screens/Hub';
import { Main } from '../screens/Main';
import { Services } from '../screens/Services';
import { Documents } from '../screens/Documents';
import { Doctors } from '../screens/Doctors';
import { History } from '../screens/History';
import { DoctorProfile } from '../screens/DoctorProfile';
import { CreateProfile } from '../screens/CreateProfile';
import { EventProvider } from 'react-native-outside-press';
import OrderModal from '../components/Modals/OrderModal';
import { getProfile } from '../app/features/profile/profileSlice';
import { getAllDoctors } from '../app/features/doctors/doctorsSlice';
import { getAllDocuments } from '../app/features/documents/documentsSlice';
import { LoadingScreen } from '../screens/LoadingScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const MainTabs: FC<NavProps> = ({ navigation }) => {
    const dispatch = useAppDispatch()
    const { doctors, documents } = useAppSelector(state => state)

    useEffect(() => {
        dispatch(getProfile())
        dispatch(getAllDoctors({ part: doctors.all.part }))
        dispatch(getAllDocuments({ part: documents.all.part }))
    }, [])

    return (
        <>
            <Tab.Navigator
                initialRouteName={"doctors"}
                tabBar={(props) => <AppTab key={props.state.index} {...props} />}
                sceneContainerStyle={[styles.main, { backgroundColor: "white" }]}
                screenOptions={{ headerShown: false, unmountOnBlur: true }}>
                <Tab.Screen name="main" component={Main} />
                <Tab.Screen name="doctors" component={Doctors} />
                <Tab.Screen name="support" component={Hub} />
                <Tab.Screen name="services" component={Services} />
                <Tab.Screen name="profile" component={Hub} />
            </Tab.Navigator>
        </>
    );
}


const AppNavigator = () => {
    const dispatch = useAppDispatch()
    const { orderModal } = useAppSelector(state => state.modals)
    const { token } = useAppSelector(state => state.login)
    const { has_profile } = useAppSelector(state => state.profile)

    return (
        <NavigationContainer>
            <EventProvider>
                <View style={[styles.main]}>
                    <Stack.Navigator initialRouteName={"doctors"} screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "transparent" } }}>
                        {
                            !token.valid ?
                                <>
                                    <Stack.Screen name="login" component={Login} />
                                    <Stack.Screen name="restore_password" component={RestorePassword} />
                                    <Stack.Screen name="register" component={Register} />

                                </> :
                                <>
                                    {
                                        has_profile === null ?
                                            <>
                                                <Stack.Screen name="loading" component={LoadingScreen} />
                                            </> :
                                            has_profile ?
                                                <Stack.Screen name="home" component={MainTabs} />
                                                :
                                                <Stack.Screen name="create_profile" component={CreateProfile} />
                                    }
                                    <Stack.Screen name="documents" component={Documents} />
                                    <Stack.Screen name="history" component={History} />
                                    <Stack.Screen name="doctor" component={DoctorProfile} />

                                </>
                        }
                    </Stack.Navigator>
                </View>
                {orderModal ? <OrderModal /> : false}
            </EventProvider>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: "column",
        gap: 16,

    },
    mainScroll: {
        flex: 1,
    }
})
export const fs = StyleSheet.create({
    montR: {
        fontFamily: "MontserratRegular"
    }
})
export default AppNavigator;