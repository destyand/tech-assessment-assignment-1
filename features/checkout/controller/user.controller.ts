import { CheckoutPayloadDto } from "../infrastructure/api/checkout.dto"
import { ApiCheckoutRepository } from "../infrastructure/api/checkout.repository"
import { postCheckoutUseCase } from "../usecase/checkout.usecase"


export async function postCheckoutController(payload: CheckoutPayloadDto) {
	const repo = new ApiCheckoutRepository()
	return postCheckoutUseCase(repo, payload)
}