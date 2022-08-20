import React from "react";

interface CheckboxProps {
    name: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name }) => {
    return <input type="checkbox" name={name} id={name} />;
};

export default Checkbox;
