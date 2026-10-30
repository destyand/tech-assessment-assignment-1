import { describe, it, expect } from "vitest";
import { balanceMapper } from "../infrastructure/api/balance.mapper";
import { BalanceDto } from "../infrastructure/api/balance.dto";

describe("balanceMapper", () => {
    it("should correctly map BalanceDto to BalanceType domain entity", () => {
        const dto: BalanceDto = { wallet_balance: 1500000 };
        const result = balanceMapper.toDomain(dto);

        expect(result).toEqual({
            balance: 1500000,
            currency: {
                symbol: "$",
                code: "USD",
            },
        });
    });
});
