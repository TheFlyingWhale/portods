import React from "react";
import { Heading, VStack } from "./components";
import ShowcaseButtons from "./showCase/ShowcaseButtons";
import ShowcaseIcons from "./showCase/ShowcaseIcons";

const App = () => {
    return (
        <VStack className="bg-slate-200 h-screen justify-center items-center">
            <VStack className="w-1/2 h-1/2 bg-white justify-center items-center rounded-3xl drop-shadow-sm gap-6">
                <Heading className="text-6xl font-bold text-slate-800">
                    Portods
                </Heading>
                <ShowcaseButtons />
                <ShowcaseIcons />
            </VStack>
        </VStack>
    );
};

export default App;
