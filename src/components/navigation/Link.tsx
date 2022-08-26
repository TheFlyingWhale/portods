import React from "react"

interface LinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {}

const Link: React.FC<LinkProps> = ({ href, children }) => {
	return <a href={href}>{children}</a>
}

export default Link
