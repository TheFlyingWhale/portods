import React from "react";

interface InputProps {
    //Optional
    className?: string;
    placeholder?: string;
    //Required
    name: string;
}

const Input: React.FC<InputProps> = ({ className, placeholder, name }) => {
    return (
        <input
            type="text"
            className={className}
            placeholder={placeholder}
            name={name}
            id={name}
        />
    );
};

export default Input;
