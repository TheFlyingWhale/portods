import React, { useState } from "react"
import {
	Checkbox,
	Heading,
	HelperText,
	Horizontal,
	IconSearch,
	Input,
	Label,
	Vertical,
	Text,
} from "../components"

const ShowcaseForm = () => {
	const [input, setInput] = useState("")

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}

	return (
		<Vertical className="items-center w-full">
			<Heading>Form</Heading>
			<Vertical className="gap-3 w-full">
				<Vertical className="items-center w-full gap-6">
					<Heading className="text-xl">Checkbox</Heading>
					<Horizontal className="gap-6">
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
				<Vertical className="items-center w-full gap-3">
					<Heading className="text-xl">Input</Heading>
					<Text className="text-neutral-700">
						{input
							? input
							: "Use one of the inputs to change this text"}
					</Text>
					<Vertical className="gap-6 w-full">
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
								<HelperText size="sm">
									Use this input to change the subtitle
								</HelperText>
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
								<HelperText size="sm">
									Use this input to change the subtitle
								</HelperText>
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
								<HelperText size="md">
									Use this input to change the subtitle
								</HelperText>
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
								<HelperText size="md">
									Use this input to change the subtitle
								</HelperText>
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
								<HelperText size="lg">
									Use this input to change the subtitle
								</HelperText>
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
								<HelperText size="lg">
									Use this input to change the subtitle
								</HelperText>
							</Vertical>
						</Horizontal>
					</Vertical>
				</Vertical>
			</Vertical>
		</Vertical>
	)
}

export default ShowcaseForm
