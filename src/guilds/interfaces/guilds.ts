import { GuildConfiguration } from '../../utils/typeorm/entities/GuildConfiguration';

export interface IGuildsService {
  getGuildConfig(guildId: string): Promise<GuildConfiguration>;
  updateGuildPrefix(
    guildId: string,
    prefix: string,
  ): Promise<GuildConfiguration>;
  updateWelcomeChannel(guildId: string, welcomeChannelId: string);
}
