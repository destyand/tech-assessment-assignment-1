export type UserDto = {
    id: number | string
    first_name: string
    last_name: string
    email: string
    membership: string
    alias: string
}

export type GetCurrentUserResponse = {
    status: number;
    message: string;
    data: UserDto;
}