import React from "react"
import { Outlet } from "react-router"
import { Vertical, Grid, GridItem } from "../../components"
import Header from "../showcaseComponents/Header"
import SideNav from "../showcaseComponents/SideNav"

const Showcase = () => {
	return (
		<Vertical className="w-full items-center h-screen">
			<Header />
			<Vertical className="w-10/12 grow overflow-hidden">
				<Grid className="grid-cols-6 h-full">
					<GridItem className="pr-6 pt-6">
						<SideNav />
					</GridItem>
					<GridItem className="col-span-4 py-6 pb-[250px] overflow-y-scroll overflow-x-hidden justify-center">
						<Outlet />
					</GridItem>
				</Grid>
			</Vertical>
		</Vertical>
	)
}

export default Showcase
