import Link from 'next/link';
import React from 'react';
import ProductImage from '../molecules/ProductImage';
import ProductCopy from '../molecules/ProductCopy';
import ProductCard from '../organisms/ProductCard';

interface ProductTemplateProps {
	error: string;
	loading: boolean;
	data: {
		id: string;
		name: string;
		brand: string;
		type: string;
		price: number;
		color: string;
		tone: string;
		tag: string;
		storage: string;
		screen: string;
		chip: string;
		camera: string;
		battery: string;
		os: string;
	}[];
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
	error,
	loading,
	data,
}) => {
	return (
		<div>
			{error ? (
				<p role="alert">{error}</p>
			) : loading ? (
				<div className="loading">
					Getting your next favorites ready<span>…</span>
				</div>
			) : (
				<>
					<div className="result-count">
						{data.length} devices, endless possibilities
					</div>
					<section className="product-grid" aria-label="Product list">
						{data.map((p: any) => (
							<ProductCard
								key={p.id}
								id={p.id}
								tone={p.tone}
								tag={p.tag}
								type={p.type}
								brand={p.brand}
								color={p.color}
								name={p.name}
								storage={p.storage}
								priceLabel={p.priceLabel}
							/>
						))}
					</section>
					{!data.length && (
						<div className="loading">No devices found. Try another search.</div>
					)}
				</>
			)}
		</div>
	);
};

export default ProductTemplate;