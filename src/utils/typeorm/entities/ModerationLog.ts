import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ModerationActionType } from '../../types';

@Entity({ name: 'moderation_logs' })
export class ModerationLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'guild_id' })
  guildId: string;

  @Column({ name: 'member_id' })
  memberId: string;

  @Column({ name: 'issued_by' })
  issuedBy: string;

  @Column()
  reason?: string;

  @Column({ name: 'issued_on' })
  issuedOn: Date;

  @Column()
  type: ModerationActionType;
}
