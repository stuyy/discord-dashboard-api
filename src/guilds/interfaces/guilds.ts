import { GuildBanLog } from '../../utils/typeorm/entities/GuildBanLog';
import { GuildConfiguration } from '../../utils/typeorm/entities/GuildConfiguration';
import { ModerationLog } from '../../utils/typeorm/entities/ModerationLog';

export interface IGuildsService {
  getGuildConfig(guildId: string): Promise<GuildConfiguration>;
  updateGuildPrefix(
    guildId: string,
    prefix: string,
  ): Promise<GuildConfiguration>;
  updateWelcomeChannel(guildId: string, welcomeChannelId: string);
  getGuildBans(guildId: string, fromDate?: Date): Promise<GuildBanLog[]>;
  getGuildLogs(guildId: string, fromDate?: Date): Promise<ModerationLog[]>;
}
