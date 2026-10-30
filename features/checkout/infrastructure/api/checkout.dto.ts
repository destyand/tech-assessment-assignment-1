export type CheckoutDto = {
	order_id: string;
	product_id: string;
	total: string;
	status: string;
}

export type CheckoutPayloadDto = {
	product_id: string;
	price: string;
}

export type PostCheckoutResponse = {
	status: number;
	message: string;
	data: CheckoutDto;
}