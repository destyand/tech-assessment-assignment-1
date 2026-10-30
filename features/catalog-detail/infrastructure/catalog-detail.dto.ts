
export type ProductDetailDto = {
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
	image: string;
};

export type GetProductDetailResponse = {
	status: number;
	message: string;
	data: ProductDetailDto;
};