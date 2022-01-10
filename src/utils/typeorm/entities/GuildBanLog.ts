import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'guild_bans' })
export class GuildBanLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'guild_id' })
  guildId: string;

  @Column({ name: 'banned_member_id' })
  bannedMemberId: string;

  @Column({ name: 'issued_by' })
  issuedBy: string;

  @Column()
  reason?: string;

  @Column({ name: 'issued_on' })
  issuedOn: Date;
}
