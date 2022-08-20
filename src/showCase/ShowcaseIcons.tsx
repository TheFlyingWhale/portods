import React from "react";
import {
    IconContainer,
    IconLock,
    VStack,
    Heading,
    HStack,
    IconExit,
    IconHome,
    IconMail,
    IconProfileDocument,
    IconSearch,
    IconSmiley,
    IconTrash,
} from "../components";

const ShowcaseIcons = () => {
    return (
        <VStack className="gap-3 items-center">
            <Heading as="h2">Icons</Heading>
            <HStack className="gap-3">
                <IconContainer size={25}>
                    <IconExit />
                </IconContainer>
                <IconContainer size={25}>
                    <IconHome />
                </IconContainer>
                <IconContainer size={25}>
                    <IconLock />
                </IconContainer>
                <IconContainer size={25}>
                    <IconMail />
                </IconContainer>
                <IconContainer size={25}>
                    <IconProfileDocument />
                </IconContainer>
                <IconContainer size={25}>
                    <IconSearch />
                </IconContainer>
                <IconContainer size={25}>
                    <IconSmiley />
                </IconContainer>
                <IconContainer size={25}>
                    <IconTrash />
                </IconContainer>
            </HStack>
        </VStack>
    );
};

export default ShowcaseIcons;
