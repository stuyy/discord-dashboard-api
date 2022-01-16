import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GuildConfiguration } from '../utils/typeorm/entities/GuildConfiguration';

@WebSocketGateway()
export class WebsocketHandler {
  @WebSocketServer()
  ws: Server;

  @SubscribeMessage('guilds')
  guildsHandler(@MessageBody() data: any) {
    console.log(data);
  }

  guildPrefixUpdate(config: GuildConfiguration) {
    this.ws.emit('guildPrefixUpdate', config);
  }

  @SubscribeMessage('guildBanAdd')
  guildBanAddHandler(@MessageBody() data: any) {
    console.log('Guild Ban Add...');
    console.log(data);
  }

  @SubscribeMessage('guildBanRemove')
  guildBanRemoveHandler(@MessageBody() data: any) {
    console.log('Guild Ban Remove...');
    console.log(data);
  }
}
