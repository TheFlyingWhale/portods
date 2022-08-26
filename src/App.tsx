import React from "react"
import { Heading, Vertical, Text, Image, Horizontal } from "./components"
import ShowcaseForm from "./showCase/ShowcaseForm"
import ShowcaseIcons from "./showCase/ShowcaseIcons"
import ShowcaseTypography from "./showCase/ShowcaseTypography"
import logo from "./assets/logo.svg"

const App = () => {
	return (
		<Vertical className="bg-neutral-100 h-screen overflow-scroll justify-start items-center">
			<Vertical className="  justify-center items-center rounded-3xl drop-shadow-sm gap-6 p-24">
				<Vertical className="items-center">
					<Horizontal className="gap-3">
						<Image
							src={logo}
							alt="logo"
							className="w-12"
						/>
						<Heading className="text-6xl pt-3">
							Portods<span className="text-orange-500">.</span>
						</Heading>
					</Horizontal>
					<Text className="text-neutral-800 text-lg">
						Design System & Component library
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
