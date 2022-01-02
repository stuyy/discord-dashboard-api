import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../utils/typeorm/entities/User';
import { UpdateUserDetails, UserDetails } from '../../utils/types';
import { IUserService } from '../interfaces/user';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  createUser(details: UserDetails) {
    console.log('Create User');
    const newUser = this.userRepository.create(details);
    return this.userRepository.save(newUser);
  }
  findUser(discordId: string) {
    console.log('Find User');
    return this.userRepository.findOne({ discordId });
  }

  updateUser(user: User, details: UpdateUserDetails) {
    console.log('Update User');
    return this.userRepository.save({
      ...user,
      ...details,
    });
  }
}
