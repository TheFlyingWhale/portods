import React from "react";

interface TestButtonProps {
    count: number;
    handleIncrease: () => void;
    handleDecrease: () => void;
    onClick: () => void;
}

const HigherOrderButtonComponent = (
    Component: React.ElementType,
    initialState: number = 0
) => {
    const WithLogic = () => {
        const [count, setCount] = React.useState(initialState);

        const handleIncrease = () => {
            setCount(count + 1);
        };

        const handleDecrease = () => {
            setCount(count - 1);
        };

        return (
            <Component
                count={count}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
            />
        );
    };

    return WithLogic;
};

const IncreaseBluePrint: React.FC<TestButtonProps> = ({
    count,
    handleIncrease,
}) => {
    return <button onClick={handleIncrease}>Clicked {count} times</button>;
};

const DecreaseBluePrint: React.FC<TestButtonProps> = ({
    count,
    handleDecrease,
}) => {
    return <button onClick={handleDecrease}>Clicked {count} times</button>;
};

const IncreaseButton = HigherOrderButtonComponent(IncreaseBluePrint);

const DecreaseButton = HigherOrderButtonComponent(DecreaseBluePrint);

export { IncreaseButton, DecreaseButton };
