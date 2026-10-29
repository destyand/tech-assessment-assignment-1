import React from "react"

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLButtonElement, InputProps>(
	({ className, ...props }, ref) => {
		const Comp = 'input'
		return (
			<Comp
				className={`${className}`}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }