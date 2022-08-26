import React from "react"
import {
	Button,
	Container,
	Heading,
	IconChevronRight,
	Text,
	Vertical,
} from "../../components"

const ShowcaseIndex = () => {
	return (
		<Vertical className="w-full">
			<Container className="h-96 flex items-center bg-transparent border-0">
				<Vertical className="w-full items-center gap-6">
					<Heading
						size="6xl"
						className="text-center leading-tight"
					>
						Get going quickly
						<span className="text-orange-500">.</span> <br />
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
					>
						Get started
					</Button>
				</Vertical>
			</Container>
		</Vertical>
	)
}

export default ShowcaseIndex
