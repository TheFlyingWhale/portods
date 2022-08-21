import React, { useState } from "react";
import {
    Button,
    Heading,
    HStack,
    IconHome,
    IconLock,
    Label,
    VStack,
} from "../components";
import {
    ButtonVariant,
    ButtonColor,
    ButtonSize,
} from "../components/form/Button";

const ShowcaseButtons: React.FC = () => {
    return (
        <VStack className="gap-3 items-center">
            <ButtonSelector />
            <AllButtons />
        </VStack>
    );
};

export default ShowcaseButtons;

const ButtonSelector = () => {
    const [variant, setVariant] = useState<ButtonVariant>(undefined);
    const [color, setColor] = useState<ButtonColor>(undefined);
    const [leftIcon, setLeftIcon] = useState<string>("");
    const [rightIcon, setRightIcon] = useState<string>("");
    const [size, setSize] = useState<ButtonSize>("xs");

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
            <HStack className="gap-3">
                <VStack>
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
                </VStack>
                <VStack>
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
                </VStack>
                <VStack>
                    <Label htmlFor="leftIcon">Left Icon</Label>
                    <IconSelector
                        name="leftIcon"
                        id="leftIcon"
                        onChange={(value) => setLeftIcon(value)}
                    />
                </VStack>
                <VStack>
                    <Label htmlFor="rightIcon">Right Icon</Label>
                    <IconSelector
                        name="rightIcon"
                        id="rightIcon"
                        onChange={(value) => setRightIcon(value)}
                    />
                </VStack>
                <VStack>
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
                </VStack>
            </HStack>
            <Button
                variant={variant}
                color={color}
                leftIcon={getIcon(leftIcon)}
                rightIcon={getIcon(rightIcon)}
                size={size}
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
            <HStack className="gap-3">
                <VStack className="gap-3">
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
                </VStack>
                <VStack className="gap-3">
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
                </VStack>
                <VStack className="gap-3">
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
                </VStack>
                <VStack className="gap-3">
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
                </VStack>
                <VStack className="gap-3">
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
                </VStack>
            </HStack>
        </>
    );
};
