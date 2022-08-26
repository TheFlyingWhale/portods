import React from "react"
import { Heading, Vertical, Text } from "./components"
import ShowcaseButtons from "./showCase/ShowcaseButtons"
import ShowcaseForm from "./showCase/ShowcaseForm"
import ShowcaseIcons from "./showCase/ShowcaseIcons"

const App = () => {
	return (
		<Vertical className="bg-neutral-100 h-screen overflow-scroll justify-start items-center">
			<Vertical className="  justify-center items-center rounded-3xl drop-shadow-sm gap-6 p-24">
				<Vertical className="items-center">
					<Heading className="text-6xl">
						Portods<span className="text-orange-500">.</span>
					</Heading>
					<Text className="text-neutral-800">Component library</Text>
				</Vertical>
				<ShowcaseForm />
				<ShowcaseButtons />
				<ShowcaseIcons />
			</Vertical>
		</Vertical>
	)
}

export default App
