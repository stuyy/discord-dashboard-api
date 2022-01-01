import { User } from '../../utils/typeorm/entities/User';
import { UserDetails } from '../../utils/types';

export interface IUserService {
  createUser(details: UserDetails): Promise<User>;
  findUser(discordId: string): Promise<User | undefined>;
}
