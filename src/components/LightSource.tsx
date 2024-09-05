import { View } from "react-native";

export default function LightSource({ active }) {
    const horizontalPosition =
        active === "library" ? "left-[86px] " : "right-[86px] ";
    return (
        // <View className="">
        <View
            className={
                horizontalPosition +
                "bg-light w-[50px] h-[6px] rounded-full absolute top-[2px]"
            }
        ></View>
    );
}
