import { View, ScrollView } from "react-native";
import Book from "./Book";

export default function Books({ books }) {
    return (
        <ScrollView className="flex-2 pb-[100px]">
            <View className="grid grid-cols-3 gap-2">
                {books.map((book, idx) => (
                    <Book key={idx} name={book} active={true} />
                ))}
            </View>
        </ScrollView>
    );
}
