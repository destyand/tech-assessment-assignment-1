import { BalanceRepositoryInterface } from "./balance.repository.interface";

export async function getCurrentBalanceUseCase(repo: BalanceRepositoryInterface) {
    return repo.getCurrentBalance()
}