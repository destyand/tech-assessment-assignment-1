import { CheckoutType } from "../../domain/checkout.entity";
import { CheckoutRepositoryInterface } from "../../usecase/checkout.repository.interface";
import { CheckoutPayloadDto, PostCheckoutResponse } from "./checkout.dto";
import { checkoutMapper } from "./checkout.mapper";

export class ApiCheckoutRepository implements CheckoutRepositoryInterface {
	postCheckout: (payload: CheckoutPayloadDto) => Promise<CheckoutType> = async (payload) => {
		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/checkout`

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload)
		})
		const result = await res.json() as PostCheckoutResponse
		return checkoutMapper.toDomain(result.data)
	};
}