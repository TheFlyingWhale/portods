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
} from "../../components"

const ICON_COLOR = "fill-orange-500"

const ShowcaseIcons = () => {
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
	]

	return (
		<Vertical className="gap-3 w-full">
			<Heading>Icons</Heading>
			<Grid className="grid-cols-12 gap-12">
				{icons.map((Icon, index) => {
					return (
						<GridItem>
							<Icon
								key={index}
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

export default ShowcaseIcons
