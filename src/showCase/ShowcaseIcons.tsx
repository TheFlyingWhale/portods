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

const ICON_COLOR = "fill-orange-500";

const ShowcaseIcons = () => {
    return (
        <VStack className="gap-3 items-center">
            <Heading as="h2">Icons</Heading>
            <HStack className="gap-3">
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconExit />
                </IconContainer>
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconHome />
                </IconContainer>
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconLock />
                </IconContainer>
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconMail />
                </IconContainer>
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconProfileDocument />
                </IconContainer>
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconSearch />
                </IconContainer>
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconSmiley />
                </IconContainer>
                <IconContainer className={ICON_COLOR} size={25}>
                    <IconTrash />
                </IconContainer>
            </HStack>
        </VStack>
    );
};

export default ShowcaseIcons;
