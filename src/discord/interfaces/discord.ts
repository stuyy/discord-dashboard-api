export interface IDiscordService {
  getBotGuilds();
  getUserGuilds(accessToken: string);
  getMutualGuilds(accessToken: string);
}
