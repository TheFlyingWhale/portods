import React from "react";
import { Checkbox, Heading, HStack, VStack } from "../components";

const ShowcaseForm = () => {
    return (
        <VStack>
            <Heading>Form</Heading>
            <VStack className="gap-3">
                <Checkbox name="Small checkbox" size="sm" />
                <Checkbox name="Medium checkbox" />
                <Checkbox name="Large checkbox" size="lg" />
            </VStack>
        </VStack>
    );
};

export default ShowcaseForm;
