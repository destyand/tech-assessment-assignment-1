import { ApiUserRepository } from "../infrastructure/api/user.repository";
import { getCurrentUserUseCase } from "../usecase/user.usecase";

export async function getCurrentUserController() {
    const repo = new ApiUserRepository()
    return getCurrentUserUseCase(repo)
}