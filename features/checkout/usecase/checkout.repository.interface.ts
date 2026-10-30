import { CheckoutType } from "../domain/checkout.entity";
import { CheckoutPayloadDto } from "../infrastructure/api/checkout.dto";

export interface CheckoutRepositoryInterface {
	postCheckout: (payload: CheckoutPayloadDto) => Promise<CheckoutType>;
}