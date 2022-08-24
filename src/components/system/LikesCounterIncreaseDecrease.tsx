import React from "react";
import { Button, Heading, Horizontal, Vertical } from "..";
import WithCounterLogic, { WithCounterLogicProps } from "./CounterSystem";

const LikesCounterElement: React.FC<WithCounterLogicProps> = ({
    count,
    increment,
    decrement,
}) => {
    return (
        <Vertical className="items-center gap-2">
            <Heading as="h3">Likes Counter Increase And Decrease</Heading>
            {count}
            <Horizontal className="gap-3">
                <Button onClick={decrement}>Decrease 👎</Button>
                <Button onClick={increment}>Increase 👍</Button>
            </Horizontal>
        </Vertical>
    );
};

const LikesCounterIncreaseDecrease = WithCounterLogic(LikesCounterElement);

export default LikesCounterIncreaseDecrease;
