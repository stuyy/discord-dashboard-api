import { ISession } from 'connect-typeorm';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class Session implements ISession {
  @Index()
  @Column('bigint')
  expiredAt: number;

  @PrimaryColumn('varchar', { length: 255 })
  id = '';

  @Column('text')
  json = '';
}
