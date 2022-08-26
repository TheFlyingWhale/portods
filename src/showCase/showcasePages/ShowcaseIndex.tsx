import React from "react"
import { useNavigate } from "react-router-dom"
import {
	Button,
	Container,
	Heading,
	IconChevronRight,
	Text,
	Vertical,
} from "../../components"

const ShowcaseIndex = () => {
	const navigate = useNavigate()

	return (
		<Vertical className="w-full h-fit gap-60">
			<Container className="h-96 mt-24 flex items-center bg-transparent border-0">
				<Vertical className="w-full items-center gap-6">
					<Heading
						size="6xl"
						className="text-center leading-tight"
					>
						Get going quickly
						<span className="text-orange-500">.</span>
						<br />
						Expand on demand
						<span className="text-orange-500">.</span>
					</Heading>
					<Text className="text-neutral-800 text-lg text-center">
						A complete react component library
						<br />
						Built with tailwind for quick development and easy
						expansion
					</Text>
					<Button
						color="orange"
						className="w-46"
						rightIcon={<IconChevronRight />}
						onClick={() => navigate("documentation")}
					>
						Get started
					</Button>
				</Vertical>
			</Container>
			<Container className="flex items-center p-24 bg-orange-500 border-0">
				<Vertical className="w-full items-center gap-6">
					<Heading
						size="6xl"
						className="text-center leading-tight text-neutral-100"
					>
						React + Tailwindcss = Portods
						<span className="text-orange-900">.</span> <br />
					</Heading>
					<Text className="text-neutral-100 text-lg text-center">
						Portods is built using react, tailwindcss and typescript
					</Text>
					<Text className="text-neutral-100 text-lg text-center">
						Every component is made in such a way that you can
						override and/or expand them with all the utility classes
						tailwind got in their arsenal
					</Text>
				</Vertical>
			</Container>
			<Container className="flex items-center bg-transparent border-0">
				<Vertical className="w-full items-center gap-6">
					<Heading
						size="6xl"
						className="text-center leading-tight"
					>
						Atomic design
					</Heading>
					<Text className="text-lg text-center">
						The collection of components consist of the essential
						styling. Giving you the opportunity to quickly develop
						simple to complex layouts
					</Text>
				</Vertical>
			</Container>
		</Vertical>
	)
}

export default ShowcaseIndex
