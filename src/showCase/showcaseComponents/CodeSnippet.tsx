import React from "react"

interface CodeSnippetProps {
	children?: React.ReactNode
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ children }) => {
	return (
		<span className="px-2 py-0.5 rounded-md text-sm font-mono text-orange-400 bg-blue-900">
			<span className="text-neutral-100">{"<"}</span>
			{children}
			<span className="text-neutral-100">{" />"}</span>
		</span>
	)
}

export default CodeSnippet
