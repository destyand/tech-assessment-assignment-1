import { CheckoutType } from "../../domain/checkout.entity"
import { CheckoutDto, CheckoutPayloadDto } from "./checkout.dto"

export const checkoutMapper = {
	toDomain(dto: CheckoutDto): CheckoutType {
		return {
			order_id: dto.order_id,
			product_id: dto.product_id,
			total: dto.total,
			status: dto.status,
		}
	},
	toPayload(dto: { id: string, price: string }): CheckoutPayloadDto {
		return {
			product_id: dto.id,
			price: dto.price,
		}
	}
}