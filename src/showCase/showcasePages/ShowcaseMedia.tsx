import React from "react"
import {
	Heading,
	Vertical,
	Horizontal,
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
		<Vertical className="gap-3 items-center">
			<Heading as="h2">Icons</Heading>
			<Horizontal className="gap-4">
				{icons.map((Icon, index) => {
					return (
						<Icon
							key={index}
							className={ICON_COLOR}
							size={25}
							contained={true}
						/>
					)
				})}
			</Horizontal>
		</Vertical>
	)
}

export default ShowcaseIcons
