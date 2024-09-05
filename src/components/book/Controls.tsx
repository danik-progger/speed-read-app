import React from "react";
import { Pressable, Text, View, Image } from "react-native";

export default function Footer() {
    return (
        <View className="h-[90px] flex flex-row justify-around items-center">
            <Pressable>
                <Image
                    className="w-[24px] h-[24px]"
                    source={require("assets/icons/15w-back.svg")}
                />
            </Pressable>
            <Pressable>
                <Image
                    className="w-[24px] h-[24px]"
                    source={require("assets/icons/play.svg")}
                />
            </Pressable>
            <Pressable>
                <Image
                    className="w-[24px] h-[24px]"
                    source={require("assets/icons/15w-forward.svg")}
                />
            </Pressable>
        </View>
    );
}
