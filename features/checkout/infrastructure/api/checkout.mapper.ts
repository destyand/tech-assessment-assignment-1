import { CheckoutType } from "../../domain/checkout.entity"
import { CheckoutDto } from "./checkout.dto"

export const checkoutMapper = {
	toDomain(dto: CheckoutDto): CheckoutType {
		return {
			order_id: dto.order_id,
			product_id: dto.product_id,
			total: dto.total,
			status: dto.status,
		}
	}
}