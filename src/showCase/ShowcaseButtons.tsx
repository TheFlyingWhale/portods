import React from "react";
import { Button, Heading, HStack, IconLock, VStack } from "../components";

const ShowcaseButtons: React.FC = () => {
    return (
        <VStack className="gap-3 items-center">
            <Heading as="h2">Buttons</Heading>
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
        </VStack>
    );
};

export default ShowcaseButtons;
