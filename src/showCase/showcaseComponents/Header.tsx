import React from "react"
import { Horizontal, Vertical, Image, Heading, Text } from "../../components"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header className="flex shrink-0 w-full justify-center">
			<Vertical className="w-10/12 items-start py-3">
				<Link to="/">
					<Horizontal className="gap-3 pl-[24px]">
						<Image
							src={logo}
							alt="logo"
							className="w-7"
						/>
						<Heading
							size="3xl"
							className="pt-1.5"
						>
							Portods<span className="text-orange-500">.</span>
						</Heading>
					</Horizontal>
				</Link>
			</Vertical>
		</header>
	)
}

export default Header
