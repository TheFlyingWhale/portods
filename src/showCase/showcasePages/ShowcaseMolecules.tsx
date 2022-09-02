import React from "react"
import { Divider, Heading, Vertical, Text } from "../../components"

const ShowcaseMolecules = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Vertical className="gap-3">
				<Heading>Molecules</Heading>
				<Text>
					Molecules are components or elements thats built of several
					Atoms
				</Text>
			</Vertical>
			<Divider />
		</Vertical>
	)
}

export default ShowcaseMolecules
