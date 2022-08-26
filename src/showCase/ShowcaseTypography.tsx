import React from "react"
import {
	Container,
	Heading,
	Subtitle,
	Vertical,
	Text,
	Label,
	Helper,
} from "../components"

const ShowcaseTypography = () => {
	return (
		<Vertical className="w-full gap-6">
			<Heading>Typography</Heading>
			<HeadingSection />
			<SubtitleSection />
			<TextSection />
			<LabelSection />
			<HelperSection />
		</Vertical>
	)
}

export default ShowcaseTypography

const HeadingSection = () => {
	return (
		<Container>
			<Vertical className="gap-6">
				<Vertical>
					<Heading as="h3">Heading</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">as, className</Text>
				</Vertical>
				<Vertical className="gap-3">
					<Heading as="h1">Heading as h1</Heading>
					<Heading as="h2">Heading as h2</Heading>
					<Heading as="h3">Heading as h3</Heading>
					<Heading as="h4">Heading as h4</Heading>
					<Heading as="h5">Heading as h5</Heading>
					<Heading as="h6">Heading as h6</Heading>
				</Vertical>
			</Vertical>
		</Container>
	)
}

const SubtitleSection = () => {
	return (
		<Container>
			<Vertical className="gap-6">
				<Vertical>
					<Heading as="h3">Subtitle</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">
						as, size, className
					</Text>
				</Vertical>
				<Vertical className="gap-3">
					<Subtitle size="xl">Subtitle size xl</Subtitle>
					<Subtitle size="lg">Subtitle size lg</Subtitle>
					<Subtitle size="md">Subtitle size md</Subtitle>
					<Subtitle size="sm">Subtitle size sm</Subtitle>
					<Subtitle size="xs">Subtitle size xs</Subtitle>
				</Vertical>
			</Vertical>
		</Container>
	)
}

const TextSection = () => {
	return (
		<Container>
			<Vertical className="gap-6">
				<Vertical>
					<Heading as="h3">Text</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">className</Text>
				</Vertical>
				<Vertical className="gap-3">
					<Text>Text</Text>
				</Vertical>
			</Vertical>
		</Container>
	)
}

const LabelSection = () => {
	return (
		<Container>
			<Vertical className="gap-6">
				<Vertical>
					<Heading as="h3">Label</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">
						htmlFor, className, size
					</Text>
				</Vertical>
				<Vertical className="gap-3">
					<Label size="lg">Label size lg</Label>
					<Label size="md">Label size ms</Label>
					<Label size="sm">Label size sm</Label>
				</Vertical>
			</Vertical>
		</Container>
	)
}

const HelperSection = () => {
	return (
		<Container>
			<Vertical className="gap-6">
				<Vertical>
					<Heading as="h3">Helper</Heading>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>
					<Text className="text-neutral-700">className, size</Text>
				</Vertical>
				<Vertical className="gap-3">
					<Helper size="lg">Helper size lg</Helper>
					<Helper size="md">Helper size md</Helper>
					<Helper size="sm">Helper size sm</Helper>
				</Vertical>
			</Vertical>
		</Container>
	)
}
