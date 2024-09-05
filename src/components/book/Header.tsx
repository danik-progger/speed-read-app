import { Pressable, View, Image, Text } from "react-native";
import { Link } from "expo-router";

export default function Header({ speed, changeSpeed }) {
    return (
        <View className="flex flex-row justify-between">
            <Link href="/" asChild>
                <Pressable>
                    <Image
                        className="m-auto"
                        source={require("assets/icons/chevron-left.svg")}
                    />
                </Pressable>
            </Link>
            <View className="grid-cols-3 grid">
                <Pressable onPress={() => changeSpeed("-", speed)}>
                    <Image
                        className="w-[24px] h-[24px] m-auto"
                        source={require("assets/icons/minus.svg")}
                    />
                </Pressable>
                <View className="">
                    <Text
                        style={{ fontFamily: "RalewayMedium" }}
                        className="text-center text-xl text-accent"
                    >
                        {speed}
                    </Text>
                    <Text
                        style={{ fontFamily: "RalewayMedium" }}
                        className="text-center text-xl text-accent"
                    >
                        w/min
                    </Text>
                </View>
                <Pressable onPress={() => changeSpeed("+", speed)}>
                    <Image
                        className="w-[24px] h-[24px] m-auto"
                        source={require("assets/icons/plus.svg")}
                    />
                </Pressable>
            </View>
            <View className="w-[30px]"></View>
        </View>
    );
}
