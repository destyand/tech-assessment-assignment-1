import React from "react"

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	options: {
		value: string;
		label: string;
	}[]
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	({ className, options, ...props }) => {
		const Comp = 'select'
		return (
			<Comp
				className={`${className}`}
				{...props}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>{option.label}</option>
				))}
			</Comp>
		)
	}
)
Select.displayName = 'Select'

export { Select }