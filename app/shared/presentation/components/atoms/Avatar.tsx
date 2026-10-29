import React from "react"

export interface AvatarProps
	extends React.HTMLAttributes<HTMLSpanElement> {
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
	({ className, ...props }, ref) => {
		return (
			<span
				className={className}
				ref={ref}
				{...props}
			/>
		)
	}
)
Avatar.displayName = 'Avatar'

export { Avatar }