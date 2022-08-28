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
} from "../../components"
import ImportSyntax from "../showcaseComponents/ImportSyntax"
import Props from "../showcaseComponents/Props"

const ShowcaseForm = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Heading>Form</Heading>
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
