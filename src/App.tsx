import React from "react";
import {
    Button,
    Checkbox,
    Heading,
    Input,
    Label,
    VStack,
    Text,
    HStack,
} from "./components";

const App = () => {
    return (
        <VStack className="bg-slate-200 h-screen justify-center items-center">
            <VStack className="w-1/2 h-1/2 bg-white justify-center items-center rounded-3xl drop-shadow-sm">
                <Heading className="text-9xl font-bold text-slate-800">
                    Portods
                </Heading>
                <Button className="bg-green-500">This is a button</Button>
            </VStack>
        </VStack>
    );
};

export default App;
