import React from "react"
import {
	Container,
	Heading,
	Subtitle,
	Vertical,
	Text,
	Label,
	Helper,
	Divider,
} from "../../components"
import ImportSyntax from "../showcaseComponents/ImportSyntax"
import Props from "../showcaseComponents/Props"

const ShowcaseTypography = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Heading>Typography</Heading>
			<Divider />

			<HeadingSection />
			<Divider />

			<SubtitleSection />
			<Divider />

			<TextSection />
			<Divider />

			<LabelSection />
			<Divider />

			<HelperSection />
		</Vertical>
	)
}

export default ShowcaseTypography

const HeadingSection = () => {
	return (
		<Vertical className="gap-6">
			<Vertical>
				<Heading as="h3">Heading</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className", "as", "size"]} />
			</Vertical>

			<ImportSyntax componentNames={["Heading"]} />

			<Vertical className="gap-3">
				<Heading as="h1">Heading as h1 size 4xl</Heading>
				<Heading as="h2">Heading as h2 size 3xl</Heading>
				<Heading as="h3">Heading as h3 size 2xl</Heading>
				<Heading as="h4">Heading as h4 size xl</Heading>
				<Heading as="h5">Heading as h5 size lg</Heading>
				<Heading as="h6">Heading as h6 size base</Heading>
			</Vertical>
		</Vertical>
	)
}

const SubtitleSection = () => {
	return (
		<Vertical className="gap-6">
			<Vertical>
				<Heading as="h3">Subtitle</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className", "as", "size"]} />
			</Vertical>

			<ImportSyntax componentNames={["Subtitle"]} />

			<Vertical className="gap-3">
				<Subtitle size="xl">Subtitle size xl</Subtitle>
				<Subtitle size="lg">Subtitle size lg</Subtitle>
				<Subtitle size="md">Subtitle size md</Subtitle>
				<Subtitle size="sm">Subtitle size sm</Subtitle>
				<Subtitle size="xs">Subtitle size xs</Subtitle>
			</Vertical>
		</Vertical>
	)
}

const TextSection = () => {
	return (
		<Vertical className="gap-6">
			<Vertical>
				<Heading as="h3">Text</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className"]} />
			</Vertical>

			<ImportSyntax componentNames={["Text"]} />

			<Vertical className="gap-3">
				<Text>This is Text</Text>
			</Vertical>
		</Vertical>
	)
}

const LabelSection = () => {
	return (
		<Vertical className="gap-6">
			<Vertical>
				<Heading as="h3">Label</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className", "htmlFor", "size"]} />
			</Vertical>

			<ImportSyntax componentNames={["Label"]} />

			<Vertical className="gap-3">
				<Label size="lg">Label size lg</Label>
				<Label size="md">Label size ms</Label>
				<Label size="sm">Label size sm</Label>
			</Vertical>
		</Vertical>
	)
}

const HelperSection = () => {
	return (
		<Vertical className="gap-6">
			<Vertical>
				<Heading as="h3">Helper</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className", "size"]} />
			</Vertical>

			<ImportSyntax componentNames={["Helper"]} />

			<Vertical className="gap-3">
				<Helper size="lg">Helper size lg</Helper>
				<Helper size="md">Helper size md</Helper>
				<Helper size="sm">Helper size sm</Helper>
			</Vertical>
		</Vertical>
	)
}
