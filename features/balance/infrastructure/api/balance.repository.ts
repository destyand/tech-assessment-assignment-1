import { BalanceType } from "../../domain/balance.entity";
import { BalanceRepositoryInterface } from "../../usecase/balance.repository.interface";
import { BalanceResponse } from "./balance.dto";
import { balanceMapper } from "./balance.mapper";

export class BalanceRepository implements BalanceRepositoryInterface {
    async getCurrentBalance(): Promise<BalanceType> {
        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/balance`
        const res = await fetch(url)
        const result = await res.json() as BalanceResponse

        return balanceMapper.toDomain(result.data)
    }
}