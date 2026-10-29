import React, { ReactNode } from 'react';

interface BadgeProps {
	children: ReactNode;
	variant: 'green' | '';
}

const Badge: React.FC<BadgeProps> = ({ children, variant }) => {
	return <span className={`badge ${variant}`}>{children}</span>;
};

export default Badge;