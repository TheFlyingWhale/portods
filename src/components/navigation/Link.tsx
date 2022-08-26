import React from "react"
import { twMerge } from "tailwind-merge"

interface LinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
	target?: string
}

const Link: React.FC<LinkProps> = ({ href, children, className, target }) => {
	return (
		<a
			href={href}
			target={target}
			className={twMerge(
				`text-orange-500 underline hover:no-underline ${className}`
			)}
		>
			{children}
		</a>
	)
}

export default Link
