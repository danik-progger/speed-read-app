import React from "react";
import { View } from "react-native";

export default function Footer() {
    return (
        <>
            <View className="w-full h-[5px] bg-beige rounded-full"></View>
            <View className="w-1/2 h-[5px] bg-accent relative top-[-4px] rounded-full"></View>
            <View className="w-[10px] h-[10px] rounded-full bg-accent relative top-[-12px] left-1/2"></View>
        </>
    );
}
