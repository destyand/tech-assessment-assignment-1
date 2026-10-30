import { BalanceType } from "../domain/balance.entity";

export interface BalanceRepositoryInterface {
    getCurrentBalance: () => Promise<BalanceType>;
}