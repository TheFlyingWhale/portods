import React from "react"
import { Routes, Route } from "react-router-dom"
import Showcase from "./showcasePages/Showcase"
import ShowcaseIndex from "./showcasePages/ShowcaseIndex"
import ShowcaseForm from "./showcasePages/ShowcaseForm"
import ShowcaseTypography from "./showcasePages/ShowcaseTypography"
import ShowcaseMedia from "./showcasePages/ShowcaseMedia"
import ShowcaseLayout from "./showcasePages/ShowcaseLayout"
import ShowcaseDocumentation from "./showcasePages/ShowcaseDocumentation"
import ShowcaseAtoms from "./showcasePages/ShowcaseAtoms"
import ShowcaseMolecules from "./showcasePages/ShowcaseMolecules"
import ShowcaseOrganisms from "./showcasePages/ShowcaseOrganisms"

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
				<Route
					path="atoms"
					element={<ShowcaseAtoms />}
				/>
				<Route
					path="molecules"
					element={<ShowcaseMolecules />}
				/>
				<Route
					path="organisms"
					element={<ShowcaseOrganisms />}
				/>
			</Route>
		</Routes>
	)
}

export default ShowcaseRouter
