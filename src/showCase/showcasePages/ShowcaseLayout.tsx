import React from "react"
import {
	Container,
	Divider,
	Grid,
	GridItem,
	Heading,
	Horizontal,
	Subtitle,
	Text,
	Vertical,
} from "../../components"
import ImportSyntax from "../showcaseComponents/ImportSyntax"
import Props from "../showcaseComponents/Props"

const ShowcaseLayout = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Heading>Layout</Heading>
			<Divider />

			<ContainerSection />
			<Divider />

			<HorizontalSection />
			<Divider />

			<VerticalSection />
			<Divider />

			<GridSection />
			<Divider />

			<GridItemSection />
			<Divider />

			<DividerSection />
		</Vertical>
	)
}

export default ShowcaseLayout

const ContainerSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Container</Heading>

				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>

				<Props props={["className"]} />

				<Text>
					The container is a div with padding set to 12, give it a
					background to make it visible
				</Text>
			</Vertical>

			<ImportSyntax componentNames={["Container"]} />

			<Vertical className="w-full">
				<Container className="bg-neutral-150 border-1 border-neutral-200 flex justify-center">
					This is a container
				</Container>
			</Vertical>
		</Vertical>
	)
}

const HorizontalSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Horizontal</Heading>

				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>

				<Props props={["className"]} />

				<Text>Horizontal is a div styled with flex and flex-row</Text>
			</Vertical>

			<ImportSyntax componentNames={["Horizontal"]} />

			<Vertical className="w-full">
				<Horizontal className="w-full justify-between bg-neutral-150 border-1 border-neutral-200 gap-3 p-3 rounded-md">
					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>

					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>

					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>
				</Horizontal>
			</Vertical>
		</Vertical>
	)
}

const VerticalSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Vertical</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className"]} />
				<Text>Horizontal is a div styled with flex and flex-col</Text>
			</Vertical>

			<ImportSyntax componentNames={["Vertical"]} />

			<Vertical className="w-full">
				<Vertical className="w-full justify-between bg-neutral-150 border-1 border-neutral-200 gap-3 p-3 rounded-md">
					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>
					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>
				</Vertical>
			</Vertical>
		</Vertical>
	)
}

const GridSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Grid</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className"]} />
				<Text>Grid is a div styled with grid</Text>
			</Vertical>

			<ImportSyntax componentNames={["Grid"]} />

			<Vertical className="w-full">
				<Grid className="w-full grid-cols-2 bg-neutral-150 border-1 border-neutral-200 gap-3 p-3 rounded-md">
					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>
					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>
					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>
					<Container className="bg-neutral-100 grow border-1 border-neutral-200 flex justify-center">
						Child
					</Container>
				</Grid>
			</Vertical>
		</Vertical>
	)
}

const GridItemSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">GridItem</Heading>
				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>
				<Props props={["className"]} />
				<Text>GridItem is a div styled with flex</Text>
			</Vertical>

			<ImportSyntax componentNames={["GridItem"]} />

			<Vertical className="w-full">
				<Grid className="w-full grid-cols-6 grid-rows-3 bg-neutral-150 border-1 border-neutral-200 gap-3 p-3 rounded-md">
					<GridItem className="bg-neutral-100 col-span-2 p-6 grow border-1 border-neutral-200 flex justify-center rounded-md">
						Grid Item
					</GridItem>
					<GridItem className="bg-neutral-100 col-span-2 p-6 grow border-1 border-neutral-200 flex justify-center rounded-md">
						Grid Item
					</GridItem>
					<GridItem className="bg-neutral-100 col-span-2 p-6 grow border-1 border-neutral-200 flex justify-center rounded-md">
						Grid Item
					</GridItem>
					<GridItem className="bg-neutral-100 col-span-3 p-6 grow border-1 border-neutral-200 flex justify-center rounded-md">
						Grid Item
					</GridItem>
					<GridItem className="bg-neutral-100 col-span-3 p-6 grow border-1 border-neutral-200 flex justify-center rounded-md">
						Grid Item
					</GridItem>
					<GridItem className="bg-neutral-100 col-span-6 p-6 grow border-1 border-neutral-200 flex justify-center rounded-md">
						Grid Item
					</GridItem>
				</Grid>
			</Vertical>
		</Vertical>
	)
}

const DividerSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical>
				<Heading as="h3">Divider</Heading>

				<Subtitle
					size="lg"
					as="h4"
				>
					Props
				</Subtitle>

				<Props props={["className"]} />

				<Text>A vertical line used to divide content</Text>
			</Vertical>

			<ImportSyntax componentNames={["Divider"]} />

			<Vertical className="w-full">
				<Container className="bg-transparent border-1 border-neutral-200 flex justify-center">
					<Divider />
				</Container>
			</Vertical>
		</Vertical>
	)
}
