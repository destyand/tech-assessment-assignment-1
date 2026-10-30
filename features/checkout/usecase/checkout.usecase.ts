import { CheckoutPayloadDto } from "../infrastructure/api/checkout.dto";
import { CheckoutRepositoryInterface } from "./checkout.repository.interface";

export async function postCheckoutUseCase(repo: CheckoutRepositoryInterface, payload: CheckoutPayloadDto) {
	return repo.postCheckout(payload)
}