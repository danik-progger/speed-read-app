import React, { useState } from "react";
import { Pressable, View, Image } from "react-native";
import { Link } from "expo-router";
import LightSource from "./LightSource";

export default function Footer() {
    const [active, setActive] = useState("library");
    return (
        <View className="h-[60px] bg-accent absolute bottom-0 w-full left-0 rounded-lg">
            <LightSource active={active} />
            <Link href="/" asChild>
                <Pressable onPress={() => setActive("library")}>
                    <Image
                        className="absolute left-[100px] top-[18px]"
                        source={require("assets/icons/book-open.svg")}
                    />
                </Pressable>
            </Link>
            <Link href="/" asChild>
                <Pressable onPress={() => setActive("settings")}>
                    <Image
                        className="absolute right-[100px] top-[18px]"
                        source={require("assets/icons/settings.svg")}
                    />
                </Pressable>
            </Link>
        </View>
    );
}
