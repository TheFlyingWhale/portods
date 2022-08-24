import React from "react";
import IconContainer from "./IconContainer";
import { IconProps } from "./IconUtilities";

const IconTrash: React.FC<IconProps> = ({ className, size, contained }) => {
    if (contained) {
        return (
            <IconContainer className={className} size={size}>
                <path d="M2.49996 13.3333C2.49996 14.25 3.24996 15 4.16663 15H10.8333C11.75 15 12.5 14.25 12.5 13.3333V3.33333H2.49996V13.3333ZM13.3333 0.833333H10.4166L9.58329 0H5.41663L4.58329 0.833333H1.66663V2.5H13.3333V0.833333Z" />
            </IconContainer>
        );
    }
    return (
        <path d="M2.49996 13.3333C2.49996 14.25 3.24996 15 4.16663 15H10.8333C11.75 15 12.5 14.25 12.5 13.3333V3.33333H2.49996V13.3333ZM13.3333 0.833333H10.4166L9.58329 0H5.41663L4.58329 0.833333H1.66663V2.5H13.3333V0.833333Z" />
    );
};

export default IconTrash;
