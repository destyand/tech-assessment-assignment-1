import React from "react"

export interface ImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	({ className, ...props }, ref) => {
		const Component = 'img'
		return (
			<Component
				alt={props?.alt ?? 'alt-image'}
				className={`${className}`}
				ref={ref}
				{...props}
			/>
		)
	}
)
Image.displayName = 'Image'

export { Image }