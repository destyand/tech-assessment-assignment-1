import { UserType } from "../../domain/user.entity"
import { UserDto } from "./user.dto"

export const userMapper = {
    toDomain(dto: UserDto): UserType {
        const fullName = `${dto.first_name} ${dto.last_name}`
        return {
            id: dto.id.toString(),
            name: fullName,
            alias: fullName.split(" ")[0][0] + fullName.split(" ")[1][0],
            email: dto.email,
            membership: dto.membership
        }
    }
}