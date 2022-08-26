import React from "react"
import { Routes, Route } from "react-router-dom"
import Showcase from "./showcasePages/Showcase"
import ShowcaseIndex from "./showcasePages/ShowcaseIndex"
import ShowcaseForm from "./showcasePages/ShowcaseForm"
import ShowcaseTypography from "./showcasePages/ShowcaseTypography"
import ShowcaseMedia from "./showcasePages/ShowcaseMedia"
import ShowcaseLayout from "./showcasePages/ShowcaseLayout"
import ShowcaseDocumentation from "./showcasePages/ShowcaseDocumentation"

const ShowcaseRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Showcase />}
			>
				<Route
					index
					element={<ShowcaseIndex />}
				/>
				<Route
					path="documentation"
					element={<ShowcaseDocumentation />}
				/>
				<Route
					path="form"
					element={<ShowcaseForm />}
				/>
				<Route
					path="typography"
					element={<ShowcaseTypography />}
				/>
				<Route
					path="media"
					element={<ShowcaseMedia />}
				/>
				<Route
					path="layout"
					element={<ShowcaseLayout />}
				/>
			</Route>
		</Routes>
	)
}

export default ShowcaseRouter
