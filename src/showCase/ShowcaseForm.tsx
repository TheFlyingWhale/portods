import React from "react";
import {
    Checkbox,
    Heading,
    Horizontal,
    IconSearch,
    Input,
    Label,
    Vertical,
} from "../components";

const ShowcaseForm = () => {
    return (
        <Vertical className="items-center">
            <Heading>Form</Heading>
            <Vertical className="gap-3">
                <Vertical className="items-center">
                    <Heading className="text-xl">Checkbox</Heading>
                    <Horizontal className="gap-3">
                        <Checkbox name="Small checkbox" size="sm" />
                        <Checkbox name="Medium checkbox" />
                        <Checkbox name="Large checkbox" size="lg" />
                    </Horizontal>
                </Vertical>
                <Vertical className="items-center">
                    <Heading className="text-xl">Input</Heading>
                    <Vertical className="gap-3">
                        <Horizontal className="w-full gap-3">
                            <Vertical className="w-full">
                                <Label htmlFor="smallInput" size="sm">
                                    Small input
                                </Label>
                                <Input
                                    placeholder="Small input"
                                    name="smallInput"
                                    size="sm"
                                />
                            </Vertical>
                            <Vertical className="w-full">
                                <Label htmlFor="smallInputWithIcon" size="sm">
                                    Small input with icon
                                </Label>
                                <Input
                                    placeholder="Small input with icon"
                                    name="smallInputWithIcon"
                                    size="sm"
                                    leftIcon={<IconSearch />}
                                />
                            </Vertical>
                        </Horizontal>
                        <Horizontal className="gap-3">
                            <Vertical className="w-full">
                                <Label htmlFor="mediumInput" size="md">
                                    Medium input
                                </Label>
                                <Input
                                    placeholder="Medium input"
                                    name="mediumInput"
                                    size="md"
                                />
                            </Vertical>
                            <Vertical className="w-full">
                                <Label htmlFor="mediumInputWithIcon" size="md">
                                    Medium with Icon
                                </Label>
                                <Input
                                    placeholder="Medium input with icon"
                                    name="mediumInputWithIcon"
                                    size="md"
                                    leftIcon={<IconSearch />}
                                />
                            </Vertical>
                        </Horizontal>
                        <Horizontal className="gap-3">
                            <Vertical className="w-full">
                                <Label htmlFor="largeInput" size="lg">
                                    Large input
                                </Label>
                                <Input
                                    placeholder="Input"
                                    name="largeInput"
                                    size="lg"
                                />
                            </Vertical>
                            <Vertical className="w-full">
                                <Label htmlFor="largeInputWithIcon" size="lg">
                                    Large input with icon
                                </Label>
                                <Input
                                    placeholder="Large input with icon"
                                    name="largeInputWithIcon"
                                    size="lg"
                                    leftIcon={<IconSearch />}
                                />
                            </Vertical>
                        </Horizontal>
                    </Vertical>
                </Vertical>
            </Vertical>
        </Vertical>
    );
};

export default ShowcaseForm;
