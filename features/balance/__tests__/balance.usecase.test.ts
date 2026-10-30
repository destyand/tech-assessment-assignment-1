import { describe, it, expect, vi } from "vitest";
import { getCurrentBalanceUseCase } from "../usecase/balance.usecase";
import { BalanceRepositoryInterface } from "../usecase/balance.repository.interface";
import { BalanceType } from "../domain/balance.entity";

describe("getCurrentBalanceUseCase", () => {
    it("should return balance from repository", async () => {
        const mockBalance: BalanceType = {
            balance: 2000000,
            currency: { symbol: "$", code: "USD" },
        };
        const mockRepo: BalanceRepositoryInterface = {
            getCurrentBalance: vi.fn().mockResolvedValue(mockBalance),
        };

        const result = await getCurrentBalanceUseCase(mockRepo);

        expect(mockRepo.getCurrentBalance).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockBalance);
    });
});
