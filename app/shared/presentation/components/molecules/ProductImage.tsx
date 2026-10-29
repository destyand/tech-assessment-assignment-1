import React, { ReactNode } from 'react';
import Badge from '../atoms/Badge';

interface ProductImageProps {
	tone: string;
	tag: string;
	type: string;
	brand: string;
	color: string;
}

const ProductImage: React.FC<ProductImageProps> = ({
	tone,
	tag,
	type,
	brand,
	color
}) => {
	return (
		<div className={'product-art ' + tone}>
			{tag && (
				<Badge
					variant={tag === 'NEW ARRIVAL' ? 'green' : ''}
				>
					{tag}
				</Badge>
			)}
			<div
				className={
					'device ' + (type === 'Tablets' ? 'tablet' : '')
				}
			>
				<div className="device-back">
					<div
						className={
							'cameras ' + (brand === 'Google' ? 'pixel' : '')
						}
					>
						<i />
						<i />
						<i />
					</div>
					<span className="device-brand">
						{brand === 'Apple'
							? '●'
							: brand === 'Google'
								? 'G'
								: 'SAMSUNG'}
					</span>
				</div>
				<div className="device-front">
					<div className="dynamic-island" />
					<div className="wallpaper" />
				</div>
			</div>
			<span className="art-caption">{color}</span>
		</div>
	);
};

export default ProductImage;