import Link from 'next/link';
import React from 'react';
import ProductImage from '../molecules/ProductImage';
import ProductCopy from '../molecules/ProductCopy';

interface ProductCardProps {
	id: string;
	tone: string;
	tag: string;
	type: string;
	brand: string;
	color: string;
	name: string;
	storage: string;
	priceLabel: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	id,
	tone,
	tag,
	type,
	brand,
	color,
	name,
	storage,
	priceLabel,
}) => {
	return (
		<Link
			className="product-card"
			key={id}
			href={'/product/' + id}
		>
			<ProductImage
				tone={tone}
				tag={tag}
				type={type}
				brand={brand}
				color={color}
			/>
			<ProductCopy
				brand={brand}
				type={type}
				name={name}
				storage={storage}
				color={color}
				priceLabel={priceLabel}
			/>
		</Link>
	);
};

export default ProductCard;