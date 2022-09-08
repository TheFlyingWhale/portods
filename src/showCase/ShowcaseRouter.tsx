import React from "react"
import { Routes, Route } from "react-router-dom"
import Showcase from "./showcasePages/Showcase"
import ShowcaseIndex from "./showcasePages/ShowcaseIndex"
import ShowcaseForm from "./showcasePages/ShowcaseForm"
import ShowcaseMedia from "./showcasePages/ShowcaseMedia"
import ShowcaseLayout from "./showcasePages/ShowcaseLayout"
import ShowcaseDocumentation from "./showcasePages/ShowcaseDocumentation"
import ShowcaseColors from "./showcasePages/ShowcaseColors"
import ShowcaseTypography from "./showcasePages/ShowcaseTypography"

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
					path="colors"
					element={<ShowcaseColors />}
				/>
				<Route
					path="media"
					element={<ShowcaseMedia />}
				/>
				<Route
					path="layout"
					element={<ShowcaseLayout />}
				/>
				<Route
					path="typography"
					element={<ShowcaseTypography />}
				/>
			</Route>
		</Routes>
	)
}

export default ShowcaseRouter
