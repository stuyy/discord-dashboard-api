import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SERVICES } from '../utils/constants';
import { GuildBanLog } from '../utils/typeorm/entities/GuildBanLog';
import { GuildConfiguration } from '../utils/typeorm/entities/GuildConfiguration';
import { ModerationLog } from '../utils/typeorm/entities/ModerationLog';
import { WebSocketModule } from '../websocket/websocket.module';
import { GuildsController } from './controllers/guilds.controller';
import { GuildsService } from './services/guilds.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([GuildConfiguration, GuildBanLog, ModerationLog]),
    WebSocketModule,
  ],
  controllers: [GuildsController],
  providers: [
    {
      provide: SERVICES.GUILDS,
      useClass: GuildsService,
    },
  ],
})
export class GuildsModule {}
