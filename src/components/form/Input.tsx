import React from "react";

interface InputProps {
    className?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({ className, placeholder }) => {
    return (
        <input type="text" className={className} placeholder={placeholder} />
    );
};

export default Input;
