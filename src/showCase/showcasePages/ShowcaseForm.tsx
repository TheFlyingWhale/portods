import React, { useState } from "react"
import {
	Checkbox,
	Heading,
	Helper,
	IconSearch,
	Input,
	Label,
	Vertical,
	Text,
	Subtitle,
	Button,
	IconLock,
	Grid,
	Divider,
	Horizontal,
	Container,
	RadioGroup,
	Radio,
} from "../../components"
import CodeSnippet from "../showcaseComponents/CodeSnippet"
import ImportSyntax from "../showcaseComponents/ImportSyntax"
import Props from "../showcaseComponents/Props"

const ShowcaseForm = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Heading>Form</Heading>
			<Divider />
			<RadioGroupSection />
			<Divider />
			<RadioSection />
			<Divider />
			<CheckboxSection />
			<Divider />
			<InputSection />
			<Divider />
			<AllButtonsSection />
		</Vertical>
	)
}

export default ShowcaseForm

const RadioGroupSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Radio group</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>

				<Props
					props={[
						"className",
						"label",
						"onChange",
						"direction",
						"name",
						"defaultValue",
					]}
				/>

				<Text>
					Provides a <CodeSnippet>Label</CodeSnippet> and wraps
					provided <CodeSnippet>Radio</CodeSnippet> elements in either
					an <CodeSnippet>Horizontal</CodeSnippet> or{" "}
					<CodeSnippet>Vertical</CodeSnippet> component based on the
					direction prop
				</Text>
			</Vertical>

			<ImportSyntax componentNames={["RadioGroup"]} />
		</Vertical>
	)
}

const RadioSection = () => {
	const [value, setValue] = useState<string>("")

	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Radio</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>

				<Props
					props={["className", "id", "name", "value", "defaultValue"]}
				/>

				<Vertical className="gap-2">
					<Text>
						Provides a <CodeSnippet>{"input"}</CodeSnippet> linked
						with a <CodeSnippet>{"Label"}</CodeSnippet>
					</Text>

					<Text>
						If used inside a <CodeSnippet>RadioGroup</CodeSnippet>{" "}
						use the name prop on{" "}
						<CodeSnippet>RadioGroup</CodeSnippet> instead of on the{" "}
						<CodeSnippet>Radio</CodeSnippet> element
					</Text>
				</Vertical>
			</Vertical>

			<ImportSyntax componentNames={["Radio"]} />

			<Container className="w-full flex flex-col gap-3">
				<RadioGroup
					label="Select an option"
					onChange={setValue}
					direction="horizontal"
					className="gap-2"
					name="options"
				>
					<Radio
						id="option1"
						value="OPTION 1 VALUE"
					>
						Option 1
					</Radio>
					<Radio
						id="option2"
						value="OPTION 2 VALUE"
						defaultValue
					>
						Option 2
					</Radio>
					<Radio
						id="option3"
						value="OPTION 3 VALUE"
					>
						Option 3
					</Radio>
					<Radio
						id="option4"
						value="OPTION 4 VALUE"
					>
						Option 4
					</Radio>
				</RadioGroup>

				<Text>
					Chosen value: {value ? value : "no value selected "}
				</Text>
			</Container>
		</Vertical>
	)
}

const CheckboxSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Checkbox</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>

				<Props props={["name", "size", "helperText"]} />
			</Vertical>

			<ImportSyntax componentNames={["Checkbox"]} />

			<Container className="w-full">
				<Horizontal className="w-full justify-around">
					<Checkbox name="Medium checkbox" />
					<Checkbox
						name="Medium checkbox with helper text"
						helperText="This is helper text"
					/>
				</Horizontal>
			</Container>
		</Vertical>
	)
}

const InputSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Input</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props
					props={[
						"className",
						"name",
						"placeholder",
						"size",
						"leftIcon",
						"onChange",
						"value",
					]}
				/>
			</Vertical>

			<ImportSyntax componentNames={["Input"]} />

			<Vertical className="w-full gap-3">
				<Horizontal className="gap-6 w-full">
					<Vertical className="w-full">
						<Label
							htmlFor="mediumInput"
							size="md"
						>
							Label
						</Label>
						<Input
							placeholder="Input"
							name="mediumInput"
							size="md"
						/>
						<Helper size="md">Helper</Helper>
					</Vertical>
					<Vertical className="w-full">
						<Label
							htmlFor="mediumInputWithIcon"
							size="md"
						>
							Input with Icon
						</Label>
						<Input
							placeholder="Search"
							name="mediumInputWithIcon"
							size="md"
							leftIcon={<IconSearch />}
						/>
						<Helper size="md">Find what you're looking for</Helper>
					</Vertical>
				</Horizontal>
			</Vertical>
		</Vertical>
	)
}

const AllButtonsSection = () => {
	return (
		<Vertical className="gap-6">
			<Vertical>
				<Heading as="h3">Buttons</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props
					props={[
						"className",
						"variant",
						"color",
						"LeftIcon",
						"RightIcon",
						"size",
						"align",
						"onClick",
					]}
				/>
			</Vertical>

			<ImportSyntax componentNames={["Button"]} />

			<Grid className="grid-cols-5 gap-6">
				<Button leftIcon={<IconLock />}>Primary</Button>
				<Button
					color="blue"
					leftIcon={<IconLock />}
				>
					Primary
				</Button>
				<Button
					color="green"
					leftIcon={<IconLock />}
				>
					Primary
				</Button>
				<Button
					color="red"
					leftIcon={<IconLock />}
				>
					Primary
				</Button>
				<Button
					color="orange"
					leftIcon={<IconLock />}
				>
					Primary
				</Button>
				<Button
					variant="secondary"
					leftIcon={<IconLock />}
				>
					Secondary
				</Button>
				<Button
					variant="secondary"
					leftIcon={<IconLock />}
					color="blue"
				>
					Secondary
				</Button>
				<Button
					variant="secondary"
					leftIcon={<IconLock />}
					color="green"
				>
					Secondary
				</Button>
				<Button
					variant="secondary"
					leftIcon={<IconLock />}
					color="red"
				>
					Secondary
				</Button>
				<Button
					variant="secondary"
					leftIcon={<IconLock />}
					color="orange"
				>
					Secondary
				</Button>
				<Button
					variant="ghost"
					leftIcon={<IconLock />}
				>
					Ghost
				</Button>
				<Button
					variant="ghost"
					className="w-full"
					color="blue"
					leftIcon={<IconLock />}
				>
					Ghost
				</Button>
				<Button
					variant="ghost"
					className="w-full"
					color="green"
					leftIcon={<IconLock />}
				>
					Ghost
				</Button>
				<Button
					variant="ghost"
					className="w-full"
					color="red"
					leftIcon={<IconLock />}
				>
					Ghost
				</Button>
				<Button
					variant="ghost"
					className="w-full"
					color="orange"
					leftIcon={<IconLock />}
				>
					Ghost
				</Button>
			</Grid>
		</Vertical>
	)
}
