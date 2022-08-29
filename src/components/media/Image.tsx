interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
	className?: string
	src: string
	alt: string
}

const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			{...props}
		/>
	)
}

export default Image
