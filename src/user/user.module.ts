import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SERVICES } from '../utils/constants';
import { User } from '../utils/typeorm/entities/User';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: SERVICES.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
