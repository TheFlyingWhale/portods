import React from "react";
import {
    IconContainer,
    IconLock,
    Vertical,
    Heading,
    Horizontal,
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
        <Vertical className="gap-3 items-center">
            <Heading as="h2">Icons</Heading>
            <Horizontal className="gap-3">
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
            </Horizontal>
        </Vertical>
    );
};

export default ShowcaseIcons;
