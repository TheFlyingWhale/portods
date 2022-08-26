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
} from "../../components"

const ShowcaseForm = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
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
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Checkbox</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Text className="text-neutral-700">name, size, helperText</Text>
			</Vertical>
			<Checkbox name="Medium checkbox" />
			<Checkbox
				name="Medium checkbox with helper text"
				helperText="This is helper text"
			/>
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
				<Text className="text-neutral-700">
					name, className, placeholder, size, leftIcon, onChange,
					value
				</Text>
			</Vertical>
			<Vertical className="w-full gap-3">
				<Vertical className="gap-6 w-4/5">
					<Vertical className="w-full">
						<Label
							htmlFor="mediumInput"
							size="md"
						>
							Input
						</Label>
						<Input
							placeholder="Input"
							name="mediumInput"
							size="md"
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
							Input with Icon
						</Label>
						<Input
							placeholder="Input with icon"
							name="mediumInputWithIcon"
							size="md"
							leftIcon={<IconSearch />}
						/>
						<Helper size="md">
							Use this input to change the subtitle
						</Helper>
					</Vertical>
				</Vertical>
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
				<Text className="text-neutral-700">
					className, variant, color, LeftIcon, RightIcon, size, align,
					onClick
				</Text>
			</Vertical>
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
