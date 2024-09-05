import React from "react";
import { Pressable, Text, View, Image } from "react-native";
import { Link } from "expo-router";

export default function Footer() {
    return (
        <View className="flex flex-row justify-around align-center absolute bottom-0 w-full left-0">
            <Link href="/chapters" asChild>
                <Pressable>
                    <Image
                        className="w-[24px] h-[24px]"
                        source={require("assets/icons/list.svg")}
                    />
                </Pressable>
            </Link>
            <Link href="/font" asChild>
                <Pressable>
                    <Image
                        className="w-[24px] h-[24px]"
                        source={require("assets/icons/T.svg")}
                    />
                </Pressable>
            </Link>
            <Link href="/notes" asChild>
                <Pressable>
                    <Image
                        className="w-[24px] h-[24px]"
                        source={require("assets/icons/notes.svg")}
                    />
                </Pressable>
            </Link>
        </View>
    );
}
