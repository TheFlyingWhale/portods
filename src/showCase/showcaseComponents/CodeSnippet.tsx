import React from "react"

interface CodeSnippetProps {
	children?: React.ReactNode
	attributes?: {
		attribute: string
		values: string
	}[]
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ children, attributes }) => {
	return (
		<span className="px-2 py-0.5 rounded-md text-base font-mono text-orange-300 bg-blue-900">
			<span className="text-neutral-100">{"<"}</span>
			{children}{" "}
			{attributes &&
				attributes.map((item) => {
					return (
						<span className="text-yellow-300">
							<span className="text-pink-300">
								{item.attribute}
								<span className="text-orange-300">=</span>
							</span>
							"{item.values}"
						</span>
					)
				})}
			<span className="text-neutral-100">{" />"}</span>
		</span>
	)
}

export default CodeSnippet
