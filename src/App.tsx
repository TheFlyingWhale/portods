import React from "react";
import { Heading, VStack } from "./components";
import ShowcaseButtons from "./showCase/ShowcaseButtons";
import ShowcaseIcons from "./showCase/ShowcaseIcons";

const App = () => {
    return (
        <VStack className="bg-neutral-100 h-screen justify-center items-center">
            <VStack className=" bg-neutral-150 justify-center items-center rounded-3xl drop-shadow-sm gap-6 p-24">
                <Heading className="text-6xl">Portods</Heading>
                <ShowcaseButtons />
                <ShowcaseIcons />
            </VStack>
        </VStack>
    );
};

export default App;
