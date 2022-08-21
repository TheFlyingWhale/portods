import React from "react";
import {
    Checkbox,
    Heading,
    HStack,
    IconSearch,
    Input,
    Label,
    VStack,
} from "../components";

const ShowcaseForm = () => {
    return (
        <VStack className="items-center">
            <Heading>Form</Heading>
            <VStack className="gap-3">
                <VStack className="items-center">
                    <Heading className="text-xl">Checkbox</Heading>
                    <HStack className="gap-3">
                        <Checkbox name="Small checkbox" size="sm" />
                        <Checkbox name="Medium checkbox" />
                        <Checkbox name="Large checkbox" size="lg" />
                    </HStack>
                </VStack>
                <VStack className="items-center">
                    <Heading className="text-xl">Input</Heading>
                    <VStack className="gap-3 w-full">
                        <VStack>
                            <Label htmlFor="smallInput" size="sm">
                                Small input
                            </Label>
                            <Input
                                placeholder="Small input"
                                name="smallInput"
                                size="sm"
                            />
                        </VStack>
                        <VStack>
                            <Label htmlFor="smallInputWithIcon" size="sm">
                                Small input with icon
                            </Label>
                            <Input
                                placeholder="Small input with icon"
                                name="smallInputWithIcon"
                                size="sm"
                                leftIcon={<IconSearch />}
                            />
                        </VStack>
                        <VStack>
                            <Label htmlFor="mediumInput" size="md">
                                Medium input
                            </Label>
                            <Input
                                placeholder="Medium input"
                                name="mediumInput"
                                size="md"
                            />
                        </VStack>
                        <VStack>
                            <Label htmlFor="mediumInputWithIcon" size="md">
                                Medium with Icon
                            </Label>
                            <Input
                                placeholder="Medium input with icon"
                                name="mediumInputWithIcon"
                                size="md"
                                leftIcon={<IconSearch />}
                            />
                        </VStack>
                        <VStack>
                            <Label htmlFor="largeInput" size="lg">
                                Large input
                            </Label>
                            <Input
                                placeholder="Input"
                                name="largeInput"
                                size="lg"
                            />
                        </VStack>
                        <VStack>
                            <Label htmlFor="largeInputWithIcon" size="lg">
                                Large input with icon
                            </Label>
                            <Input
                                placeholder="Large input with icon"
                                name="largeInputWithIcon"
                                size="lg"
                                leftIcon={<IconSearch />}
                            />
                        </VStack>
                    </VStack>
                </VStack>
            </VStack>
        </VStack>
    );
};

export default ShowcaseForm;
