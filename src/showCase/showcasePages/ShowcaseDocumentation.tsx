import React from "react"
import {
	Container,
	Heading,
	Subtitle,
	Vertical,
	Text,
	Horizontal,
	Button,
	IconClipboard,
	Link,
	Divider,
} from "../../components"
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
			<Subtitle size="lg">Installation</Subtitle>
			<Text>Install portods via npm</Text>
			<CodeSyntax clipboardSyntax="npm install portods" />
		</Vertical>
	)
}

const TailwindcssSection = () => {
	const copyInstallTailwind = () => {
		navigator.clipboard.writeText("npm install -D tailwindcss")
	}

	return (
		<Vertical className="gap-2">
			<Subtitle size="lg">Expand with tailwindcss</Subtitle>
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
