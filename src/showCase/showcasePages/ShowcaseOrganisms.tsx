import React from "react"
import { Divider, Heading, Vertical, Text } from "../../components"

const ShowcaseOrganisms = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Vertical className="gap-3">
				<Heading>Organisms</Heading>
				<Text>Organisms are components built of molecules</Text>
			</Vertical>
			<Divider />
		</Vertical>
	)
}

export default ShowcaseOrganisms
