import React, { useEffect, useState } from "react"
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
	Select,
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

			<SelectSection />
			<Divider />

			<AllButtonsSection />
		</Vertical>
	)
}

export default ShowcaseForm

const RadioGroupSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">Radio group</Heading>

				<Vertical>
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
				</Vertical>

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
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">Radio</Heading>

				<Vertical>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>

					<Props
						props={[
							"className",
							"id",
							"name",
							"value",
							"defaultValue",
						]}
					/>
				</Vertical>

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
			</Container>
		</Vertical>
	)
}

const CheckboxSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">Checkbox</Heading>

				<Vertical>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>

					<Props props={["name", "size", "helperText"]} />
				</Vertical>

				<Text>
					Provides a{" "}
					<CodeSnippet
						attributes={[{ attribute: "type", values: "checkbox" }]}
					>
						input
					</CodeSnippet>{" "}
					element
				</Text>
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
			<Vertical className="gap-3">
				<Heading as="h3">Input</Heading>

				<Vertical>
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

				<Text>
					Provides a{" "}
					<CodeSnippet
						attributes={[{ attribute: "type", values: "text" }]}
					>
						input
					</CodeSnippet>{" "}
					element
				</Text>
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
							type="password"
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

const SelectSection = () => {
	const [selected, setSelected] = useState("")

	const handleSelectChange = (value: string) => {
		setSelected(value)
	}

	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">Select</Heading>

				<Vertical>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>

					<Props
						props={["size, leftIcon, name, onChange, placeholder"]}
					/>
				</Vertical>

				<Text>
					The <CodeSnippet>Select</CodeSnippet> element differs from
					others components in this library.
				</Text>
				<Text>
					Its based on the headlessui Listbox (Select) component
				</Text>
				<Text>
					The{" "}
					<span className="text-orange-500 font-mono">onChange</span>{" "}
					function does not use an event parameter, but a value which
					is of type string
				</Text>
				<Text>
					The{" "}
					<span className="text-orange-500 font-mono">children</span>{" "}
					is expected to be{" "}
					<CodeSnippet
						attributes={[
							{ attribute: "value", values: "some value" },
						]}
					>
						option
					</CodeSnippet>{" "}
					elements. Currently there is no error handling, but the app
					will break if the correct element isn't provided
				</Text>
				<Text>
					You do not have to fill the{" "}
					<CodeSnippet
						attributes={[
							{ attribute: "value", values: "some value" },
						]}
					>
						option
					</CodeSnippet>{" "}
					elements with children as they're not used by the component,
					only the value prop.
				</Text>
				<Text>
					If you provide the select with an{" "}
					<span className="text-orange-500 font-mono">leftIcon</span>{" "}
					you have to provide the icon with a size and contained prop
				</Text>
			</Vertical>

			<ImportSyntax componentNames={["Select"]} />

			<Vertical className="w-full gap-3">
				<Horizontal className="gap-3">
					<Vertical className="w-full">
						<Label
							htmlFor="select"
							size="md"
						>
							Select
						</Label>
						<Select
							name="select"
							onChange={handleSelectChange}
						>
							<option value="option1" />
							<option value="option2" />
							<option value="option3" />
						</Select>
					</Vertical>
					<Vertical className="w-full">
						<Label
							htmlFor="mediumInputWithIcon"
							size="md"
						>
							Select with Icon
						</Label>
						<Select
							name="select"
							onChange={handleSelectChange}
							leftIcon={
								<IconSearch
									size={15}
									contained
								/>
							}
						>
							<option value="option1" />
							<option value="option2" />
							<option value="option3" />
						</Select>
					</Vertical>
				</Horizontal>
			</Vertical>
		</Vertical>
	)
}

const AllButtonsSection = () => {
	return (
		<Vertical className="gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">Buttons</Heading>

				<Vertical>
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

				<Text>
					Provides a <CodeSnippet>button</CodeSnippet> element
				</Text>
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
