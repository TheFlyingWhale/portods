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
            <VStack className="w-1/2 h-1/2 bg-white justify-center items-center rounded-3xl drop-shadow-sm gap-6">
                <Heading className="text-6xl font-bold text-slate-800">
                    Portods
                </Heading>
                <VStack className="gap-3 items-center">
                    <Heading as="h2">Buttons</Heading>
                    <HStack className="gap-3">
                        <VStack className="gap-3">
                            <Button>Primary neutral</Button>
                            <Button className="w-full" color="blue">
                                Primary blue
                            </Button>
                            <Button className="w-full" color="green">
                                Primary green
                            </Button>
                            <Button className="w-full" color="red">
                                Primary red
                            </Button>
                            <Button className="w-full" color="orange">
                                Primary orange
                            </Button>
                        </VStack>
                        <VStack className="gap-3">
                            <Button variant="secondary">
                                Secondary neutral
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-full"
                                color="blue"
                            >
                                Secondary blue
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-full"
                                color="green"
                            >
                                Secondary green
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-full"
                                color="red"
                            >
                                Secondary red
                            </Button>
                            <Button
                                variant="secondary"
                                className="w-full"
                                color="orange"
                            >
                                Secondary orange
                            </Button>
                        </VStack>
                        <VStack className="gap-3">
                            <Button variant="outlined">Outlined neutral</Button>
                            <Button
                                variant="outlined"
                                className="w-full"
                                color="blue"
                            >
                                Outlined blue
                            </Button>
                            <Button
                                variant="outlined"
                                className="w-full"
                                color="green"
                            >
                                Outlined green
                            </Button>
                            <Button
                                variant="outlined"
                                className="w-full"
                                color="red"
                            >
                                Outlined red
                            </Button>
                            <Button
                                variant="outlined"
                                className="w-full"
                                color="orange"
                            >
                                Outlined orange
                            </Button>
                        </VStack>
                        <VStack className="gap-3">
                            <Button variant="ghost">Ghost neutral</Button>
                            <Button
                                variant="ghost"
                                className="w-full"
                                color="blue"
                            >
                                Ghost blue
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full"
                                color="green"
                            >
                                Ghost green
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full"
                                color="red"
                            >
                                Ghost red
                            </Button>
                            <Button
                                variant="ghost"
                                className="w-full"
                                color="orange"
                            >
                                Ghost orange
                            </Button>
                        </VStack>
                        <VStack className="gap-3">
                            <Button variant="round">Round neutral</Button>
                            <Button
                                variant="round"
                                className="w-full"
                                color="blue"
                            >
                                Round blue
                            </Button>
                            <Button
                                variant="round"
                                className="w-full"
                                color="green"
                            >
                                Round green
                            </Button>
                            <Button
                                variant="round"
                                className="w-full"
                                color="red"
                            >
                                Round red
                            </Button>
                            <Button
                                variant="round"
                                className="w-full"
                                color="orange"
                            >
                                Round orange
                            </Button>
                        </VStack>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default App;
