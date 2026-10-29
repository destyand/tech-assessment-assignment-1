import React, { ReactNode } from 'react';
import { Input } from '../atoms/Input';
import IconSearch from '../atoms/IconSearch';

interface InputSearchProps {
	value: string;
	className?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({ value, className }) => {
	return (
		<label className={`search ${className}`}>
			<IconSearch />
			<Input aria-label="Search devices" placeholder="Search devices…" value={value} />
		</label>
	);
};

export default InputSearch;