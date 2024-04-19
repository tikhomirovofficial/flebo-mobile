import { FC } from "react";
import { ViewStyle, View } from "react-native";
import { containerStyles } from "../AppContainer";

export const MainContainer: FC<{ children: React.ReactNode, style?: ViewStyle | ViewStyle[] }> = ({ children, style = null }) => {
    return (
        <View style={[{ paddingTop: 70, paddingBottom: 30 }, style]}>
            {children}
        </View>
    );
};
