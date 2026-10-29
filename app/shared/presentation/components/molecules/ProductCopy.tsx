import React from 'react';
import Text from '../atoms/Text';
import {
	ArrowUpRight,
} from 'lucide-react';

interface ProductCopyProps {
	brand: string;
	type: string;
	name: string;
	storage: string;
	color: string;
	priceLabel: string;
}

const ProductCopy: React.FC<ProductCopyProps> = ({
	brand,
	type,
	name,
	storage,
	color,
	priceLabel,
}) => {
	return (
		<div className="product-copy">
			<span className="brand">
				{brand}{' '}
				<span>
					/ {type === 'Tablets' ? 'Tablet' : 'Smartphone'}
				</span>
			</span>
			<h3>{name}</h3>
			<Text>
				{storage} <span>·</span> {color}
			</Text>
			<div className="product-bottom">
				<strong>
					{priceLabel}
					<small> USD</small>
				</strong>
				<span className="circle-arrow">
					<ArrowUpRight size={19} />
				</span>
			</div>
		</div>
	);
};

export default ProductCopy;