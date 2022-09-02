import React from "react"
import {
	Divider,
	Heading,
	Vertical,
	Text,
	ShapeCircle,
	Horizontal,
	Subtitle,
} from "../../components"

const ShowcaseAtoms = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Vertical className="gap-3">
				<Heading>Atoms</Heading>
				<Text>Atoms are singular components or elements</Text>
			</Vertical>
			<Divider />

			<FontSection />
			<Divider />

			<ColorSection />
			<Divider />
		</Vertical>
	)
}

export default ShowcaseAtoms

const ColorSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-12 w-full">
				<Heading as="h3">Colors</Heading>

				<NeutralSection />

				<RedSection />

				<OrangeSection />

				<GreenSection />

				<BlueSection />
			</Vertical>
		</Vertical>
	)
}

const FontSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-12 w-full">
				<Heading as="h3">Fonts</Heading>

				<Vertical className="gap-3">
					<Subtitle>Primary</Subtitle>
					<Heading
						as="h3"
						size="6xl"
						className="font-primary"
					>
						Josefin Sans
					</Heading>
				</Vertical>

				<Vertical className="gap-3">
					<Subtitle>Secondary</Subtitle>
					<Heading
						as="h3"
						size="6xl"
						className="font-secondary"
					>
						Heebo
					</Heading>
				</Vertical>

				<Vertical className="gap-3">
					<Subtitle>Mono</Subtitle>
					<Heading
						as="h3"
						size="6xl"
						className="font-mono"
					>
						Space Mono
					</Heading>
				</Vertical>
			</Vertical>
		</Vertical>
	)
}

const RedSection = () => {
	return (
		<Vertical className="gap-3">
			<Heading as="h5">Red</Heading>
			<Horizontal className="gap-6 justify-between w-full">
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-50" />
					<Text>50</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-100" />
					<Text>100</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-300" />
					<Text>300</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-400" />
					<Text>400</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-500" />
					<Text>500</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-600" />
					<Text>600</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-700" />
					<Text>700</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-800" />
					<Text>800</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-red-900" />
					<Text>900</Text>
				</Vertical>
			</Horizontal>
		</Vertical>
	)
}

const OrangeSection = () => {
	return (
		<Vertical className="gap-3">
			<Heading as="h5">Orange</Heading>
			<Horizontal className="gap-6 justify-between w-full">
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-50" />
					<Text>50</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-100" />
					<Text>100</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-300" />
					<Text>300</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-400" />
					<Text>400</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-500" />
					<Text>500</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-600" />
					<Text>600</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-700" />
					<Text>700</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-800" />
					<Text>800</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-orange-900" />
					<Text>900</Text>
				</Vertical>
			</Horizontal>
		</Vertical>
	)
}

const GreenSection = () => {
	return (
		<Vertical className="gap-3">
			<Heading as="h5">Green</Heading>
			<Horizontal className="gap-6 justify-between w-full">
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-50" />
					<Text>50</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-100" />
					<Text>100</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-300" />
					<Text>300</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-400" />
					<Text>400</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-500" />
					<Text>500</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-600" />
					<Text>600</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-700" />
					<Text>700</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-800" />
					<Text>800</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-green-900" />
					<Text>900</Text>
				</Vertical>
			</Horizontal>
		</Vertical>
	)
}

const BlueSection = () => {
	return (
		<Vertical className="gap-3">
			<Heading as="h5">Blue</Heading>
			<Horizontal className="gap-6 justify-between w-full">
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-50" />
					<Text>50</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-100" />
					<Text>100</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-300" />
					<Text>300</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-400" />
					<Text>400</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-500" />
					<Text>500</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-600" />
					<Text>600</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-700" />
					<Text>700</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-800" />
					<Text>800</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-blue-900" />
					<Text>900</Text>
				</Vertical>
			</Horizontal>
		</Vertical>
	)
}

const NeutralSection = () => {
	return (
		<Vertical className="gap-3">
			<Heading as="h5">Neutral</Heading>
			<Horizontal className="gap-6 justify-between w-full">
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-50" />
					<Text>50</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-100" />
					<Text>100</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-200" />
					<Text>200</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-300" />
					<Text>300</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-400" />
					<Text>400</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-500" />
					<Text>500</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-600" />
					<Text>600</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-700" />
					<Text>700</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-800" />
					<Text>800</Text>
				</Vertical>
				<Vertical className="gap-3 items-center">
					<ShapeCircle className="bg-neutral-900" />
					<Text>900</Text>
				</Vertical>
			</Horizontal>
		</Vertical>
	)
}
