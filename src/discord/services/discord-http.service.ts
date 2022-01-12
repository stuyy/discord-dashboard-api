import { Injectable } from '@nestjs/common';
import { IDiscordHttpService } from '../interfaces/discord-http';
import axios, { AxiosResponse } from 'axios';
import {
  GuildBanType,
  PartialGuild,
  PartialGuildChannel,
} from '../../utils/types';
import { DISCORD_BASE_URL } from '../../utils/constants';

@Injectable()
export class DiscordHttpService implements IDiscordHttpService {
  fetchBotGuilds() {
    const TOKEN = process.env.DISCORD_BOT_TOKEN;
    return axios.get<PartialGuild[]>(`${DISCORD_BASE_URL}/users/@me/guilds`, {
      headers: {
        Authorization: `Bot ${TOKEN}`,
      },
    });
  }

  fetchUserGuilds(accessToken: string) {
    return axios.get<PartialGuild[]>(`${DISCORD_BASE_URL}/users/@me/guilds`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  fetchGuildChannels(guildId: string) {
    const TOKEN = process.env.DISCORD_BOT_TOKEN;
    return axios.get<PartialGuildChannel[]>(
      `${DISCORD_BASE_URL}/guilds/${guildId}/channels`,
      {
        headers: {
          Authorization: `Bot ${TOKEN}`,
        },
      },
    );
  }

  fetchGuildBans(guildId: string) {
    const TOKEN = process.env.DISCORD_BOT_TOKEN;
    return axios.get<GuildBanType[]>(
      `${DISCORD_BASE_URL}/guilds/${guildId}/bans`,
      {
        headers: {
          Authorization: `Bot ${TOKEN}`,
        },
      },
    );
  }

  deleteGuildBan(guildId: string, userId: string): Promise<AxiosResponse> {
    const TOKEN = process.env.DISCORD_BOT_TOKEN;
    return axios.delete(
      `${DISCORD_BASE_URL}/guilds/${guildId}/bans/${userId}`,
      {
        headers: {
          Authorization: `Bot ${TOKEN}`,
        },
      },
    );
  }
}
