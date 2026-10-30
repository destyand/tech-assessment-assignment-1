import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ApiUserRepository } from "../infrastructure/api/user.repository";

describe("ApiUserRepository", () => {
    const originalEnv = process.env.NEXT_PUBLIC_BASE_API_URL;

    beforeEach(() => {
        process.env.NEXT_PUBLIC_BASE_API_URL = "http://localhost:3000/api";
    });

    afterEach(() => {
        process.env.NEXT_PUBLIC_BASE_API_URL = originalEnv;
        vi.restoreAllMocks();
    });

    it("should fetch user from API and return mapped domain entity", async () => {
        const mockApiResponse = {
            status: 200,
            message: "success",
            data: {
                id: 42,
                first_name: "John",
                last_name: "Doe",
                email: "john@example.com",
                membership: "Silver",
                alias: "JD",
            },
        };

        vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({
                json: async () => mockApiResponse,
            })
        );

        const repo = new ApiUserRepository();
        const result = await repo.getCurrentUser();

        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/api/users/me");
        expect(result).toEqual({
            id: "42",
            name: "John Doe",
            alias: "JD",
            email: "john@example.com",
            membership: "Silver",
        });
    });
});
