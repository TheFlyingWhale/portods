import React from "react"
import { Heading, Vertical, Text } from "./components"
import ShowcaseForm from "./showCase/ShowcaseForm"
import ShowcaseIcons from "./showCase/ShowcaseIcons"
import ShowcaseTypography from "./showCase/ShowcaseTypography"

const App = () => {
	return (
		<Vertical className="bg-neutral-100 h-screen overflow-scroll justify-start items-center">
			<Vertical className="  justify-center items-center rounded-3xl drop-shadow-sm gap-6 p-24">
				<Vertical className="items-center">
					<Heading className="text-6xl">
						Portods<span className="text-orange-500">.</span>
					</Heading>
					<Text className="text-neutral-800 text-lg">
						A Component library
					</Text>
					<Text className="text-neutral-600">
						Developed by Ole Walberg
					</Text>
				</Vertical>
				<Vertical className="gap-24">
					<ShowcaseTypography />
					<ShowcaseForm />
					<ShowcaseIcons />
				</Vertical>
			</Vertical>
		</Vertical>
	)
}

export default App
