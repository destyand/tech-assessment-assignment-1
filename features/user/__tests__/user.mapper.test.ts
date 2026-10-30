import { describe, it, expect } from "vitest";
import { userMapper } from "../infrastructure/api/user.mapper";
import { UserDto } from "../infrastructure/api/user.dto";

describe("userMapper", () => {
    it("should correctly map UserDto to UserType domain entity", () => {
        const dto: UserDto = {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            membership: "Platinum",
            alias: "JD",
        };

        const result = userMapper.toDomain(dto);

        expect(result).toEqual({
            id: "1",
            name: "John Doe",
            alias: "JD",
            email: "john.doe@example.com",
            membership: "Platinum",
        });
    });
});
