import { describe, it, expect, vi } from "vitest";
import { getCurrentUserUseCase } from "../usecase/user.usecase";
import { UserRepositoryInterface } from "../usecase/user.repository.interface";
import { UserType } from "../domain/user.entity";

describe("getCurrentUserUseCase", () => {
    it("should return user from repository", async () => {
        const mockUser: UserType = {
            id: "1",
            name: "Jane Doe",
            alias: "JD",
            email: "jane@example.com",
            membership: "Gold",
        };
        const mockRepo: UserRepositoryInterface = {
            getCurrentUser: vi.fn().mockResolvedValue(mockUser),
        };

        const result = await getCurrentUserUseCase(mockRepo);

        expect(mockRepo.getCurrentUser).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockUser);
    });
});
