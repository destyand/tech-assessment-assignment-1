import { UserRepositoryInterface } from "./user.repository.interface";

export async function getCurrentUserUseCase(repo: UserRepositoryInterface) {
    return repo.getCurrentUser()
}