import React from "react";

export interface WithCounterLogicProps {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

const WithCounterLogic = (
    Component: React.ElementType,
    initialState: number = 0
) => {
    const WithCounterLogic = () => {
        const [count, setCount] = React.useState(initialState);

        const increment = () => setCount(count + 1);

        const decrement = () => setCount(count - 1);

        const reset = () => setCount(initialState);

        return (
            <Component
                count={count}
                increment={increment}
                decrement={decrement}
                reset={reset}
            />
        );
    };

    return WithCounterLogic;
};

export default WithCounterLogic;
