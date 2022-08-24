import React from "react";
import { Heading, Vertical } from "../components";
import LikesCounterIncrease from "../components/system/LikesCounterIncrease";
import LikesCounterIncreaseDecrease from "../components/system/LikesCounterIncreaseDecrease";
import LikesCounterIncreaseDecreaseReset from "../components/system/LikesCounterIncreaseDecreaseReset";

const ShowCaseSystem = () => {
    return (
        <Vertical className="items-center gap-6">
            <Heading>System</Heading>
            <LikesCounterIncrease />
            <LikesCounterIncreaseDecrease />
            <LikesCounterIncreaseDecreaseReset />
        </Vertical>
    );
};

export default ShowCaseSystem;
