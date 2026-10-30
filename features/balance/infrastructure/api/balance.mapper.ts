import { BalanceType } from "../../domain/balance.entity";
import { BalanceDto } from "./balance.dto";

export const balanceMapper = {
    toDomain(dto: BalanceDto): BalanceType {

        return {
            balance: dto.wallet_balance,
            currency: {
                symbol: "$",
                code: "USD"
            }
        }
    }
}