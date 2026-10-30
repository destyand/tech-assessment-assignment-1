import { BalanceRepository } from "../infrastructure/api/balance.repository";
import { getCurrentBalanceUseCase } from "../usecase/balance.usecase";

export async function getCurrentBalanceController() {
    const repo = new BalanceRepository()
    return getCurrentBalanceUseCase(repo)
}