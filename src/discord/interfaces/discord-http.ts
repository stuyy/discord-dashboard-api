import { AxiosResponse } from 'axios';
import { PartialGuild } from '../../utils/types';

export interface IDiscordHttpService {
  fetchBotGuilds(): Promise<AxiosResponse<PartialGuild[]>>;
  fetchUserGuilds(accessToken: string): Promise<AxiosResponse<PartialGuild[]>>;
}
