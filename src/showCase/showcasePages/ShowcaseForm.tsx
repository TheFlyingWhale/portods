import React, { useState } from "react"
import {
	Checkbox,
	Heading,
	Helper,
	Horizontal,
	IconSearch,
	Input,
	Label,
	Vertical,
	Text,
	Container,
	Subtitle,
	Button,
	IconLock,
} from "../../components"

const ShowcaseForm = () => {
	return (
		<Vertical className="w-full h-fit gap-6">
			<Heading>Form</Heading>
			<CheckboxSection />
			<InputSection />
			<AllButtonsSection />
		</Vertical>
	)
}

export default ShowcaseForm

const CheckboxSection = () => {
	return (
		<Container>
			<Vertical className="items-start w-full gap-6">
				<Vertical>
					<Heading as="h3">Checkbox</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">
						name, size, helperText
					</Text>
				</Vertical>
				<Horizontal className="gap-6 items-center">
					<Checkbox
						name="Small checkbox"
						size="sm"
					/>
					<Checkbox name="Medium checkbox" />
					<Checkbox
						name="Large checkbox"
						size="lg"
					/>
				</Horizontal>
				<Horizontal className="gap-6">
					<Checkbox
						name="Small checkbox with helper text"
						size="sm"
						helperText="This is helper text"
					/>
					<Checkbox
						name="Medium checkbox with helper text"
						helperText="This is helper text"
					/>
					<Checkbox
						name="Large checkbox with helper text"
						size="lg"
						helperText="This is helper text"
					/>
				</Horizontal>
			</Vertical>
		</Container>
	)
}

const InputSection = () => {
	const [input, setInput] = useState("")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	return (
		<Container>
			<Vertical className="items-start w-full gap-6">
				<Vertical>
					<Heading as="h3">Input</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">
						name, className, placeholder, size, leftIcon, onChange,
						value
					</Text>
				</Vertical>
				<Vertical className="w-full gap-3">
					<Text className="text-neutral-700">
						{input
							? input
							: "Use one of the inputs to change this text"}
					</Text>
					<Vertical className="gap-6 w-4/5">
						<Horizontal className="w-full gap-3">
							<Vertical className="w-full">
								<Label
									htmlFor="smallInput"
									size="sm"
								>
									Small input
								</Label>
								<Input
									placeholder="Small input"
									name="smallInput"
									size="sm"
									value={input}
									onChange={handleChange}
								/>
								<Helper size="sm">
									Use this input to change the subtitle
								</Helper>
							</Vertical>
							<Vertical className="w-full">
								<Label
									htmlFor="smallInputWithIcon"
									size="sm"
								>
									Small input with icon
								</Label>
								<Input
									placeholder="Small input with icon"
									name="smallInputWithIcon"
									size="sm"
									leftIcon={<IconSearch />}
									value={input}
									onChange={handleChange}
								/>
								<Helper size="sm">
									Use this input to change the subtitle
								</Helper>
							</Vertical>
						</Horizontal>
						<Horizontal className="gap-3">
							<Vertical className="w-full">
								<Label
									htmlFor="mediumInput"
									size="md"
								>
									Medium input
								</Label>
								<Input
									placeholder="Medium input"
									name="mediumInput"
									size="md"
									value={input}
									onChange={handleChange}
								/>
								<Helper size="md">
									Use this input to change the subtitle
								</Helper>
							</Vertical>
							<Vertical className="w-full">
								<Label
									htmlFor="mediumInputWithIcon"
									size="md"
								>
									Medium with Icon
								</Label>
								<Input
									placeholder="Medium input with icon"
									name="mediumInputWithIcon"
									size="md"
									leftIcon={<IconSearch />}
									value={input}
									onChange={handleChange}
								/>
								<Helper size="md">
									Use this input to change the subtitle
								</Helper>
							</Vertical>
						</Horizontal>
						<Horizontal className="gap-3">
							<Vertical className="w-full">
								<Label
									htmlFor="largeInput"
									size="lg"
								>
									Large input
								</Label>
								<Input
									placeholder="Large Input"
									name="largeInput"
									size="lg"
									value={input}
									onChange={handleChange}
								/>
								<Helper size="lg">
									Use this input to change the subtitle
								</Helper>
							</Vertical>
							<Vertical className="w-full">
								<Label
									htmlFor="largeInputWithIcon"
									size="lg"
								>
									Large input with icon
								</Label>
								<Input
									placeholder="Large input with icon"
									name="largeInputWithIcon"
									size="lg"
									leftIcon={<IconSearch />}
									value={input}
									onChange={handleChange}
								/>
								<Helper size="lg">
									Use this input to change the subtitle
								</Helper>
							</Vertical>
						</Horizontal>
					</Vertical>
				</Vertical>
			</Vertical>
		</Container>
	)
}

const AllButtonsSection = () => {
	return (
		<Container>
			<Vertical className="gap-6">
				<Vertical>
					<Heading as="h3">Buttons</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">
						className, variant, color, LeftIcon, RightIcon, size,
						align, onClick
					</Text>
				</Vertical>
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
						<Button
							variant="secondary"
							leftIcon={<IconLock />}
						>
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
						<Button
							variant="outlined"
							leftIcon={<IconLock />}
						>
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
						<Button
							variant="ghost"
							leftIcon={<IconLock />}
						>
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
						<Button
							variant="round"
							leftIcon={<IconLock />}
						>
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
			</Vertical>
		</Container>
	)
}
