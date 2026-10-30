import { UserType } from "../../domain/user.entity";
import { UserRepositoryInterface } from "../../usecase/user.repository.interface";
import { GetCurrentUserResponse } from "./user.dto";
import { userMapper } from "./user.mapper";

export class ApiUserRepository implements UserRepositoryInterface {
    getCurrentUser: () => Promise<UserType> = async () => {
        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/me`

        const res = await fetch(url)
        const result = await res.json() as GetCurrentUserResponse
        return userMapper.toDomain(result.data)
    };
}