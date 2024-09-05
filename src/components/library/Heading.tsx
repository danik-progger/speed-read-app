import { Text } from "react-native";

export default function Heading({ active, title, emoji }) {
    return (
        <Text
            style={{ fontFamily: "RalewayBold" }}
            role="heading"
            className={
                "text-xl font-bold text-accent " +
                (active ? "" : "opacity-50")
            }
        >
            <Text className="underline">{title}</Text> <Text>{emoji}</Text>
        </Text>
    );
}
