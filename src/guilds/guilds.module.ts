import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SERVICES } from '../utils/constants';
import { GuildConfiguration } from '../utils/typeorm/entities/GuildConfiguration';
import { WebSocketModule } from '../websocket/websocket.module';
import { GuildsController } from './controllers/guilds.controller';
import { GuildsService } from './services/guilds.service';

@Module({
  imports: [TypeOrmModule.forFeature([GuildConfiguration]), WebSocketModule],
  controllers: [GuildsController],
  providers: [
    {
      provide: SERVICES.GUILDS,
      useClass: GuildsService,
    },
  ],
})
export class GuildsModule {}
