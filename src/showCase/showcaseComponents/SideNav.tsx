import React from "react"
import {
	Button,
	IconBook,
	IconColor,
	IconHome,
	IconInput,
	IconLayout,
	IconMedia,
	IconTypography,
} from "../../components"
import { Link as _Link } from "react-router-dom"
import { useLocation } from "react-router"

const SideNav = () => {
	const path = useLocation().pathname

	return (
		<nav className="w-full">
			<ul className="flex flex-col gap-3">
				<li>
					<_Link to="/">
						<Button
							variant={path === "/" ? "primary" : "ghost"}
							leftIcon={<IconHome />}
							color="orange"
							align="start"
							className="w-full"
						>
							Home
						</Button>
					</_Link>
				</li>
				<li>
					<_Link to="/documentation">
						<Button
							variant={
								path === "/documentation" ? "primary" : "ghost"
							}
							leftIcon={<IconBook />}
							color="orange"
							align="start"
							className="w-full"
						>
							Documentation
						</Button>
					</_Link>
				</li>
				<li>
					<_Link to="colors">
						<Button
							variant={
								path.includes("colors") ? "primary" : "ghost"
							}
							color="orange"
							leftIcon={<IconColor />}
							align="start"
							className="w-full"
						>
							Colors
						</Button>
					</_Link>
				</li>
				<li>
					<_Link to="form">
						<Button
							variant={
								path.includes("form") ? "primary" : "ghost"
							}
							color="orange"
							leftIcon={<IconInput />}
							align="start"
							className="w-full"
						>
							Form
						</Button>
					</_Link>
				</li>
				<li>
					<_Link to="typography">
						<Button
							variant={
								path.includes("typography")
									? "primary"
									: "ghost"
							}
							color="orange"
							leftIcon={<IconTypography />}
							align="start"
							className="w-full"
						>
							Typography
						</Button>
					</_Link>
				</li>
				<li>
					<_Link to="media">
						<Button
							variant={
								path.includes("media") ? "primary" : "ghost"
							}
							color="orange"
							leftIcon={<IconMedia />}
							align="start"
							className="w-full"
						>
							Media
						</Button>
					</_Link>
				</li>
				<li>
					<_Link to="layout">
						<Button
							variant={
								path.includes("layout") ? "primary" : "ghost"
							}
							color="orange"
							leftIcon={<IconLayout />}
							align="start"
							className="w-full"
						>
							Layout
						</Button>
					</_Link>
				</li>
			</ul>
		</nav>
	)
}

export default SideNav
