import React, { useState } from "react";
import Header from "@/components/library/Header";
import Books from "@/components/library/Books";
import Footer from "@/components/Footer";

export default function MainPage() {
    const [activeTab, setActiveTab] = useState("Reading Now");
    const books = [
        "White fang",
        "To kill a mockingbird",
        "Little Prince",
        "White fang",
        "To kill a mockingbird",
        "White fang",
        "To kill a mockingbird",
        "Little Prince",
        "White fang",
        "To kill a mockingbird",
        "White fang",
        "To kill a mockingbird",
        "Little Prince",
        "White fang",
        "To kill a mockingbird",
    ];
    const finishedBooks = [
        "White fang",
        "To kill a mockingbird",
        "Little Prince",
    ];
    return (
        <>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <Books
                books={activeTab === "Reading Now" ? books : finishedBooks}
            />
            <Footer />
        </>
    );
}
