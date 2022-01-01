import { User } from './typeorm/entities/User';

export type UserDetails = {
  discordId: string;
};

export type Done = (err: Error, user: User) => void;
