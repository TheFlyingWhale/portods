import React from "react"
import {
	Horizontal,
	Image,
	Heading,
	Text,
	Grid,
	GridItem,
} from "../../components"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<header className="flex shrink-0 w-full justify-center">
			<Grid className="grid-cols-3 py-3 w-10/12">
				<GridItem>
					<Horizontal className="gap-6 items-center">
						<Link to="/">
							<Horizontal className="gap-3 pl-[24px] ">
								<Image
									src={logo}
									alt="logo"
									className="w-7"
								/>
								<Heading
									size="3xl"
									className="pt-1.5"
								>
									Portods
									<span className="text-orange-500">.</span>
								</Heading>
							</Horizontal>
						</Link>
						<Text className="py-1.5 px-3 text-neutral-100 text-xs bg-orange-500 rounded-full">
							Alpha 0.1.1
						</Text>
					</Horizontal>
				</GridItem>
				<GridItem>
					{/* <Input
						leftIcon={<IconSearch />}
						placeholder="Quick search"
						containerClassName="w-full"
					/> */}
				</GridItem>
			</Grid>
		</header>
	)
}

export default Header
