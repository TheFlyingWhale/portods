import React from "react"
import {
	Divider,
	Heading,
	Vertical,
	Text,
	ShapeCircle,
	Grid,
} from "../../components"
import CodeSnippet from "../showcaseComponents/CodeSnippet"

const ShowcaseColors = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Vertical className="gap-3">
				<Heading>Colors</Heading>
				<Text>Utilities for controlling color</Text>
				<Text>
					Colors are applied to text and background in the same way as
					in tailwindcss
					<br />
					<CodeSnippet classes="text-orange-500 bg-orange-500">
						Element
					</CodeSnippet>
				</Text>
			</Vertical>
			<Divider />

			<ColorSection />
		</Vertical>
	)
}

export default ShowcaseColors

const ColorSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-12 w-full">
				<Heading as="h3">Neutral</Heading>

				<ColorGrid>
					<NeutralSection />
				</ColorGrid>

				<Heading as="h3">Red</Heading>

				<ColorGrid>
					<RedSection />
				</ColorGrid>

				<Heading as="h3">Orange</Heading>

				<ColorGrid>
					<OrangeSection />
				</ColorGrid>

				<Heading as="h3">Yellow</Heading>

				<ColorGrid>
					<YellowSection />
				</ColorGrid>

				<Heading as="h3">Green</Heading>

				<ColorGrid>
					<GreenSection />
				</ColorGrid>

				<Heading as="h3">Teal</Heading>

				<ColorGrid>
					<TealSection />
				</ColorGrid>

				<Heading as="h3">Cyan</Heading>

				<ColorGrid>
					<CyanSection />
				</ColorGrid>

				<Heading as="h3">Blue</Heading>

				<ColorGrid>
					<BlueSection />
				</ColorGrid>

				<Heading as="h3">Purple</Heading>

				<ColorGrid>
					<PurpleSection />
				</ColorGrid>

				<Heading as="h3">Pink</Heading>

				<ColorGrid>
					<PinkSection />
				</ColorGrid>
			</Vertical>
		</Vertical>
	)
}

const ColorGrid = ({ children }: { children?: React.ReactNode }) => {
	return (
		<Grid className="xl:grid-cols-11 lg:grid-cols-6 sm:grid-cols-3 gap-y-6">
			{children}
		</Grid>
	)
}

const NeutralSection = () => {
	return (
		<>
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
		</>
	)
}

const RedSection = () => {
	return (
		<>
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
		</>
	)
}

const OrangeSection = () => {
	return (
		<>
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
		</>
	)
}

const YellowSection = () => {
	return (
		<>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-50" />
				<Text>50</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-100" />
				<Text>100</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-300" />
				<Text>300</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-400" />
				<Text>400</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-500" />
				<Text>500</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-600" />
				<Text>600</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-700" />
				<Text>700</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-800" />
				<Text>800</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-yellow-900" />
				<Text>900</Text>
			</Vertical>
		</>
	)
}

const GreenSection = () => {
	return (
		<>
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
		</>
	)
}

const TealSection = () => {
	return (
		<>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-50" />
				<Text>50</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-100" />
				<Text>100</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-300" />
				<Text>300</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-400" />
				<Text>400</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-500" />
				<Text>500</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-600" />
				<Text>600</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-700" />
				<Text>700</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-800" />
				<Text>800</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-teal-900" />
				<Text>900</Text>
			</Vertical>
		</>
	)
}

const CyanSection = () => {
	return (
		<>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-50" />
				<Text>50</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-100" />
				<Text>100</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-300" />
				<Text>300</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-400" />
				<Text>400</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-500" />
				<Text>500</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-600" />
				<Text>600</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-700" />
				<Text>700</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-800" />
				<Text>800</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-cyan-900" />
				<Text>900</Text>
			</Vertical>
		</>
	)
}

const BlueSection = () => {
	return (
		<>
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
		</>
	)
}

const PurpleSection = () => {
	return (
		<>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-50" />
				<Text>50</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-100" />
				<Text>100</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-300" />
				<Text>300</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-400" />
				<Text>400</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-500" />
				<Text>500</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-600" />
				<Text>600</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-700" />
				<Text>700</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-800" />
				<Text>800</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-purple-900" />
				<Text>900</Text>
			</Vertical>
		</>
	)
}

const PinkSection = () => {
	return (
		<>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-50" />
				<Text>50</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-100" />
				<Text>100</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-200" />
				<Text>200</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-300" />
				<Text>300</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-400" />
				<Text>400</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-500" />
				<Text>500</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-600" />
				<Text>600</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-700" />
				<Text>700</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-800" />
				<Text>800</Text>
			</Vertical>
			<Vertical className="gap-3 items-center">
				<ShapeCircle className="bg-pink-900" />
				<Text>900</Text>
			</Vertical>
		</>
	)
}
