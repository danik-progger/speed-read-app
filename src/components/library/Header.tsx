import { Pressable, View } from "react-native";
import Heading from "./Heading";

export default function Header({ activeTab, setActiveTab }) {
    return (
        <View className="flex flex-row justify-between mb-[20px]">
            <Pressable onPress={() => setActiveTab("Reading Now")}>
                <Heading
                    title={"Reading now"}
                    emoji={"📚"}
                    active={activeTab == "Reading Now"}
                />
            </Pressable>
            <Pressable onPress={() => setActiveTab("Finished")}>
                <Heading
                    title={"Finished"}
                    emoji={"🚩"}
                    active={activeTab == "Finished"}
                />
            </Pressable>
        </View>
    );
}
