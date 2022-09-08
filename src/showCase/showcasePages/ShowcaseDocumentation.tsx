import React from "react"
import { Heading, Subtitle, Vertical, Text, Link } from "../../components"
import CodeSyntax from "../showcaseComponents/CodeSyntax"

const ShowcaseDocumentation = () => {
	return (
		<Vertical className="w-full gap-12">
			<Heading>Documenation</Heading>
			<PortodsSection />
			<TailwindcssSection />
		</Vertical>
	)
}

export default ShowcaseDocumentation

const PortodsSection = () => {
	return (
		<Vertical className="gap-2">
			<Subtitle size="xl">Installation</Subtitle>
			<Text>Install portods via npm</Text>
			<CodeSyntax clipboardSyntax="npm install portods" />
		</Vertical>
	)
}

const TailwindcssSection = () => {
	return (
		<Vertical className="gap-2">
			<Subtitle size="xl">Expand with tailwindcss</Subtitle>
			<Text>Install tailwindcss via npm</Text>
			<Text>
				For detailed documentation and configuration visit{" "}
				<Link
					target="_blank"
					href="https://tailwindcss.com/docs/installation"
				>
					tailwindcss
				</Link>{" "}
				website
			</Text>
			<CodeSyntax clipboardSyntax="npm install -D tailwindcss" />
		</Vertical>
	)
}
