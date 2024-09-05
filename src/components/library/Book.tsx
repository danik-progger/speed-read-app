import React from "react";
import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Book({ name, active }) {
    return (
        <Link href="/1" asChild>
            <Pressable className="relative">
                <View className="h-[200px] bg-beige/50 rounded-md">
                    <Text className="text-5xl text-center m-auto">📕</Text>
                    {active && (
                        <View className="bg-light w-[45px] h-[25px] right-[4px] bottom-[4px] absolute rounded-md">
                            <Text className="m-auto">99%</Text>
                        </View>
                    )}
                </View>

                <Text
                    style={{ fontFamily: "RalewayLight" }}
                    className="text-center font-bold text-sm mt-[5px]"
                >
                    {name}
                </Text>
            </Pressable>
        </Link>
    );
}
