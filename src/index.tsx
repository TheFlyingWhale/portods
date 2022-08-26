import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import ShowcaseRouter from "./showCase/ShowcaseRouter"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ShowcaseRouter />
		</BrowserRouter>
	</React.StrictMode>
)
