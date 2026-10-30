import { UserType } from "../domain/user.entity";

export interface UserRepositoryInterface {
    getCurrentUser: () => Promise<UserType>;
}