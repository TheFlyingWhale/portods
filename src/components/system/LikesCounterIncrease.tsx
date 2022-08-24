import React from "react";
import { Button, Heading, Vertical } from "..";
import WithCounterLogic, { WithCounterLogicProps } from "./CounterSystem";

const LikesCounterElement: React.FC<WithCounterLogicProps> = ({
    count,
    increment,
}) => {
    return (
        <Vertical className="items-center gap-2">
            <Heading as="h3">Likes Counter Increase</Heading>
            {count}
            <Button onClick={increment}>Increase 👍</Button>
        </Vertical>
    );
};

const LikesCounterIncrease = WithCounterLogic(LikesCounterElement, 10);

export default LikesCounterIncrease;
