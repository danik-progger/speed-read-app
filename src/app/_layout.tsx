import "../global.css";
import { Slot } from "expo-router";
import { View, Text } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function Layout() {
    const [loaded, error] = useFonts({
        RalewayLight: require("../../assets/fonts/Raleway-Light.ttf"),
        RalewayRegular: require("../../assets/fonts/Raleway-Regular.ttf"),
        RalewayMedium: require("../../assets/fonts/Raleway-Medium.ttf"),
        RalewayBold: require("../../assets/fonts/Raleway-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <View className="p-[30px] h-full relative">
            <Slot />
        </View>
    );
}
