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
        <>
            <Heading>This is h1</Heading>
            <Heading as="h2">This is h2</Heading>
            <Heading as="h3" className="text-red-500 text-9xl">
                This is h3
            </Heading>
            <Heading as="h4" className="text-orange-500 text-9xl">
                This is h4
            </Heading>
            <Heading as="h5">This is h5</Heading>
            <Heading as="h6" className="text-9xl">
                This is h6
            </Heading>
            <Button>This is a button</Button>
            <Input name="email" placeholder="some placeholder text" />
            <Label htmlFor="email">Email</Label>
            <Label htmlFor="rememberMe">Remember me</Label>
            <Checkbox name="rememberMe" />
            <VStack>
                <HStack className="text-blue-500 gap-3">
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                </HStack>
                <VStack className="text-orange-500 gap-10">
                    <Text>1</Text>
                    <Text>2</Text>
                    <Text>3</Text>
                </VStack>
            </VStack>
        </>
    );
};

export default App;
