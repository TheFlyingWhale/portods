import React from "react"
import {
	Heading,
	Vertical,
	IconLock,
	IconExit,
	IconHome,
	IconMail,
	IconProfileDocument,
	IconSearch,
	IconSmiley,
	IconTrash,
	IconAnalytics,
	IconCheck,
	IconInput,
	IconTypography,
	IconNavigation,
	IconMedia,
	IconLayout,
	IconChevronRight,
	IconChevronUp,
	IconChevronDown,
	IconChevronLeft,
	IconBook,
	IconClipboard,
	GridItem,
	Grid,
	Divider,
	Subtitle,
	Text,
	Image,
	Container,
	IconAtom,
	IconMolecule,
	IconOrganism,
	IconFonts,
	IconColor,
} from "../../components"
import CodeSnippet from "../showcaseComponents/CodeSnippet"
import ImportSyntax from "../showcaseComponents/ImportSyntax"
import Props from "../showcaseComponents/Props"

const ICON_COLOR = "fill-orange-500"

const ShowcaseIcons = () => {
	return (
		<Vertical className="w-full h-fit gap-12">
			<Heading>Media</Heading>
			<Divider />
			<IconSection />
			<Divider />
			<IconContainerSection />
			<Divider />
			<ImageSection />
		</Vertical>
	)
}

export default ShowcaseIcons

const IconContainerSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">IconContainer</Heading>

				<Vertical>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>

					<Props props={["className", "size"]} />
				</Vertical>

				<Text>Used to wrap icons</Text>
			</Vertical>

			<ImportSyntax componentNames={["IconContainer"]} />
		</Vertical>
	)
}

const IconSection = () => {
	const icons = [
		IconLock,
		IconExit,
		IconHome,
		IconMail,
		IconProfileDocument,
		IconSearch,
		IconSmiley,
		IconTrash,
		IconAnalytics,
		IconCheck,
		IconInput,
		IconTypography,
		IconNavigation,
		IconMedia,
		IconLayout,
		IconChevronLeft,
		IconChevronRight,
		IconChevronUp,
		IconChevronDown,
		IconBook,
		IconClipboard,
		IconAtom,
		IconMolecule,
		IconOrganism,
		IconFonts,
		IconColor,
	]

	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">Icons</Heading>

				<Vertical>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>

					<Props props={["className", "size", "contained"]} />
				</Vertical>

				<Text>
					Icons consists of paths. If contained the path will be
					wrapped inside a <CodeSnippet>IconContainer</CodeSnippet>
				</Text>
			</Vertical>

			<ImportSyntax componentNames={["Icon[Name]"]} />

			<Grid className="grid-cols-12 gap-12 w-full mt-6">
				{icons.map((Icon, index) => {
					return (
						<GridItem key={index}>
							<Icon
								className={ICON_COLOR}
								size={25}
								contained={true}
							/>
						</GridItem>
					)
				})}
			</Grid>
		</Vertical>
	)
}

const ImageSection = () => {
	return (
		<Vertical className="items-start w-full gap-6">
			<Vertical className="gap-3">
				<Heading as="h3">Image</Heading>

				<Vertical>
					<Subtitle
						size="lg"
						as="h4"
					>
						Props
					</Subtitle>

					<Props props={["className", "src", "alt"]} />
				</Vertical>

				<Text>
					Provides a <CodeSnippet>img</CodeSnippet> element
				</Text>

				<Text>
					This example image is wrapped with a{" "}
					<CodeSnippet>{"Container"}</CodeSnippet>
				</Text>
			</Vertical>

			<ImportSyntax componentNames={["Image"]} />

			<Vertical className="gap-3">
				<Container className="bg-transparent border-0 flex items-center overflow-hidden p-0">
					<Image
						src="https://images.pexels.com/photos/12225082/pexels-photo-12225082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="example image"
					/>
				</Container>
			</Vertical>
		</Vertical>
	)
}
