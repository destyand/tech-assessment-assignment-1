export type BalanceDto = {
    wallet_balance: number
}

export type BalanceResponse = {
    status: number
    message: string
    data: BalanceDto
}
