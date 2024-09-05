import React from "react";
import { Pressable, Image } from "react-native";
import { Link } from "expo-router";

export default function NavBarIcon({ href, imagePath }) {
    console.log(href, imagePath);
    return (
        <Link href={href} asChild>
            <Pressable>
                <Image
                    className="w-[24px] h-[24px]"
                    source={require(imagePath)}
                />
            </Pressable>
        </Link>
    );
}
