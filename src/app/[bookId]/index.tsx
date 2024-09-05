import React, { useState } from "react";
import { View } from "react-native";
import Header from "@/components/book/Header";
import Word from "@/components/book/Word";
import ProgressBar from "@/components/book/ProgressBar";
import Controls from "@/components/book/Controls";
import Footer from "@/components/book/Footer";

export default function MainPage() {
    const changeSpeed = (sign, speed) => {
        if (sign === "+") {
            setSpeed(speed + 10);
        }
        if (sign === "-") {
            setSpeed(speed - 10);
        }
    };
    const [speed, setSpeed] = useState(100);
    return (
        <View className="w-full h-full">
            <Header speed={speed} changeSpeed={changeSpeed} />
            <Word word="Word" />
            <ProgressBar />
            <Controls />
            {/* <Footer /> */}
        </View>
    );
}
