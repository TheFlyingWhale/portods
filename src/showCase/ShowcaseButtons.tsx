import React, { useState } from "react";
import {
    Button,
    Heading,
    Horizontal,
    IconHome,
    IconLock,
    Label,
    Vertical,
} from "../components";
import {
    ButtonVariant,
    ButtonColor,
    ButtonSize,
    ButtonAlign,
} from "../components/form/Button";

const ShowcaseButtons: React.FC = () => {
    return (
        <Vertical className="gap-3 items-center">
            <ButtonSelector />
            <AllButtons />
        </Vertical>
    );
};

export default ShowcaseButtons;

const ButtonSelector = () => {
    const [variant, setVariant] = useState<ButtonVariant>(undefined);
    const [color, setColor] = useState<ButtonColor>(undefined);
    const [leftIcon, setLeftIcon] = useState<string>("");
    const [rightIcon, setRightIcon] = useState<string>("");
    const [size, setSize] = useState<ButtonSize>("xs");
    const [align, setAlign] = useState<ButtonAlign>(undefined);

    const handleClick = () => {
        console.log("hello world");
    };

    const IconSelector = ({
        onChange,
        id,
        name,
    }: {
        onChange: (event) => void;
        id: string;
        name: string;
    }) => {
        return (
            <select
                id={id}
                name={name}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Left Icon</option>
                <option value="home">Home</option>
            </select>
        );
    };

    return (
        <>
            <Heading as="h2">Button selector</Heading>
            <Horizontal className="gap-3">
                <Vertical>
                    <Label htmlFor="variant">Variant</Label>
                    <select
                        id="variant"
                        name="variant"
                        onChange={(e) =>
                            setVariant(e.target.value as ButtonVariant)
                        }
                    >
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="outlined">Outlined</option>
                        <option value="ghost">Ghost</option>
                        <option value="round">Round</option>
                    </select>
                </Vertical>
                <Vertical>
                    <Label htmlFor="color">Color</Label>
                    <select
                        id="color"
                        name="color"
                        onChange={(e) =>
                            setColor(e.target.value as ButtonColor)
                        }
                    >
                        <option value="neutral">Neutral</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                    </select>
                </Vertical>
                <Vertical>
                    <Label htmlFor="leftIcon">Left Icon</Label>
                    <IconSelector
                        name="leftIcon"
                        id="leftIcon"
                        onChange={(value) => setLeftIcon(value)}
                    />
                </Vertical>
                <Vertical>
                    <Label htmlFor="rightIcon">Right Icon</Label>
                    <IconSelector
                        name="rightIcon"
                        id="rightIcon"
                        onChange={(value) => setRightIcon(value)}
                    />
                </Vertical>
                <Vertical>
                    <Label htmlFor="size">Size</Label>
                    <select
                        id="size"
                        name="size"
                        onChange={(e) => setSize(e.target.value as ButtonSize)}
                    >
                        <option value="xs">Extra small</option>
                        <option value="sm">Small</option>
                        <option value="md">Medium</option>
                        <option value="lg">Large</option>
                    </select>
                </Vertical>
                <Vertical>
                    <Label htmlFor="size">Align</Label>
                    <select
                        id="align"
                        name="align"
                        onChange={(e) =>
                            setAlign(e.target.value as ButtonAlign)
                        }
                    >
                        <option value="center">Center</option>
                        <option value="start">Start</option>
                        <option value="end">End</option>
                        <option value="between">Between</option>
                        <option value="around">Around</option>
                        <option value="evenly">Evenly</option>
                    </select>
                </Vertical>
            </Horizontal>
            <Button
                variant={variant}
                color={color}
                leftIcon={getIcon(leftIcon)}
                rightIcon={getIcon(rightIcon)}
                size={size}
                onClick={handleClick}
                className="w-60"
                align={align}
            >
                Variable button
            </Button>
        </>
    );
};

const getIcon = (icon: string) => {
    switch (icon) {
        case "home":
            return <IconHome />;
        default:
            return;
    }
};

const AllButtons = () => {
    return (
        <>
            <Heading as="h2">All Buttons</Heading>
            <Horizontal className="gap-3">
                <Vertical className="gap-3">
                    <Button leftIcon={<IconLock />}>Primary neutral</Button>
                    <Button
                        className="w-full"
                        color="blue"
                        leftIcon={<IconLock />}
                    >
                        Primary blue
                    </Button>
                    <Button
                        className="w-full"
                        color="green"
                        leftIcon={<IconLock />}
                    >
                        Primary green
                    </Button>
                    <Button
                        className="w-full"
                        color="red"
                        leftIcon={<IconLock />}
                    >
                        Primary red
                    </Button>
                    <Button
                        className="w-full"
                        color="orange"
                        leftIcon={<IconLock />}
                    >
                        Primary orange
                    </Button>
                </Vertical>
                <Vertical className="gap-3">
                    <Button variant="secondary" leftIcon={<IconLock />}>
                        Secondary neutral
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full"
                        leftIcon={<IconLock />}
                        color="blue"
                    >
                        Secondary blue
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full"
                        leftIcon={<IconLock />}
                        color="green"
                    >
                        Secondary green
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full"
                        leftIcon={<IconLock />}
                        color="red"
                    >
                        Secondary red
                    </Button>
                    <Button
                        variant="secondary"
                        className="w-full"
                        leftIcon={<IconLock />}
                        color="orange"
                    >
                        Secondary orange
                    </Button>
                </Vertical>
                <Vertical className="gap-3">
                    <Button variant="outlined" leftIcon={<IconLock />}>
                        Outlined neutral
                    </Button>
                    <Button
                        variant="outlined"
                        className="w-full"
                        color="blue"
                        leftIcon={<IconLock />}
                    >
                        Outlined blue
                    </Button>
                    <Button
                        variant="outlined"
                        className="w-full"
                        color="green"
                        leftIcon={<IconLock />}
                    >
                        Outlined green
                    </Button>
                    <Button
                        variant="outlined"
                        className="w-full"
                        color="red"
                        leftIcon={<IconLock />}
                    >
                        Outlined red
                    </Button>
                    <Button
                        variant="outlined"
                        className="w-full"
                        color="orange"
                        leftIcon={<IconLock />}
                    >
                        Outlined orange
                    </Button>
                </Vertical>
                <Vertical className="gap-3">
                    <Button variant="ghost" leftIcon={<IconLock />}>
                        Ghost neutral
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full"
                        color="blue"
                        leftIcon={<IconLock />}
                    >
                        Ghost blue
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full"
                        color="green"
                        leftIcon={<IconLock />}
                    >
                        Ghost green
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full"
                        color="red"
                        leftIcon={<IconLock />}
                    >
                        Ghost red
                    </Button>
                    <Button
                        variant="ghost"
                        className="w-full"
                        color="orange"
                        leftIcon={<IconLock />}
                    >
                        Ghost orange
                    </Button>
                </Vertical>
                <Vertical className="gap-3">
                    <Button variant="round" leftIcon={<IconLock />}>
                        Round neutral
                    </Button>
                    <Button
                        variant="round"
                        className="w-full"
                        color="blue"
                        leftIcon={<IconLock />}
                    >
                        Round blue
                    </Button>
                    <Button
                        variant="round"
                        className="w-full"
                        color="green"
                        leftIcon={<IconLock />}
                    >
                        Round green
                    </Button>
                    <Button
                        variant="round"
                        className="w-full"
                        color="red"
                        leftIcon={<IconLock />}
                    >
                        Round red
                    </Button>
                    <Button
                        variant="round"
                        className="w-full"
                        color="orange"
                        leftIcon={<IconLock />}
                    >
                        Round orange
                    </Button>
                </Vertical>
            </Horizontal>
        </>
    );
};
