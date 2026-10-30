import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { BalanceRepository } from "../infrastructure/api/balance.repository";

describe("BalanceRepository", () => {
    const originalEnv = process.env.NEXT_PUBLIC_BASE_API_URL;

    beforeEach(() => {
        process.env.NEXT_PUBLIC_BASE_API_URL = "http://localhost:3000/api";
    });

    afterEach(() => {
        process.env.NEXT_PUBLIC_BASE_API_URL = originalEnv;
        vi.restoreAllMocks();
    });

    it("should fetch balance from API and return mapped domain entity", async () => {
        const mockApiResponse = {
            status: 200,
            message: "success",
            data: { wallet_balance: 500000 },
        };

        vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({
                json: async () => mockApiResponse,
            })
        );

        const repo = new BalanceRepository();
        const result = await repo.getCurrentBalance();

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/balance");
        expect(result).toEqual({
            balance: 500000,
            currency: { symbol: "$", code: "USD" },
        });
    });
});
