import React from "react";

export interface WithDefaultProps {}

const WithDefaultProps = (Component: React.ElementType) => {
    const WithDefaultProps = () => {
        return <Component />;
    };

    return WithDefaultProps;
};

export default WithDefaultProps;
