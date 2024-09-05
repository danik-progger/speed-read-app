import { Pressable, View, Image, Text } from "react-native";

export default function Word({word}) {
    return (
        <View className="w-full h-2/3">
            <Text
                className="m-auto text-center text-3xl text-black"
                style={{ fontFamily: "RalewayMedium" }}
            >
                {word}
            </Text>
        </View>
    );
}
