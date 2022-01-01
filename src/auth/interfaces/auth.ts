import { User } from '../../utils/typeorm/entities/User';
import { UserDetails } from '../../utils/types';

export interface IAuthService {
  validateUser(details: UserDetails): Promise<User>;
}
