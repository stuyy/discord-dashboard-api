import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { GuildBanLog } from '../../utils/typeorm/entities/GuildBanLog';
import { GuildConfiguration } from '../../utils/typeorm/entities/GuildConfiguration';
import { IGuildsService } from '../interfaces/guilds';

@Injectable()
export class GuildsService implements IGuildsService {
  constructor(
    @InjectRepository(GuildConfiguration)
    private readonly guildConfigRepository: Repository<GuildConfiguration>,
    @InjectRepository(GuildBanLog)
    private readonly banLogRepository: Repository<GuildBanLog>,
  ) {}

  getGuildConfig(guildId: string) {
    return this.guildConfigRepository.findOne({ guildId });
  }

  async updateGuildPrefix(guildId: string, prefix: string) {
    const guildConfig = await this.getGuildConfig(guildId);
    if (!guildConfig)
      throw new HttpException('Guild Config Not Found', HttpStatus.BAD_REQUEST);
    return this.guildConfigRepository.save({
      ...guildConfig,
      prefix,
    });
  }

  async updateWelcomeChannel(guildId: string, welcomeChannelId: string) {
    const guildConfig = await this.getGuildConfig(guildId);
    if (!guildConfig)
      throw new HttpException('Guild Config Not Found', HttpStatus.BAD_REQUEST);
    return this.guildConfigRepository.save({
      ...guildConfig,
      welcomeChannelId,
    });
  }

  getGuildBans(guildId: string, fromDate?: Date): Promise<GuildBanLog[]> {
    console.log(new Date(fromDate));
    return fromDate
      ? this.banLogRepository.find({
          where: {
            guildId,
            issuedOn: MoreThanOrEqual(new Date(fromDate)),
          },
        })
      : this.banLogRepository.find({ guildId });
  }
}
