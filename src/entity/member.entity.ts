import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'member' })
export class Member {
  @PrimaryColumn('char', { length: 36 })
  @Generated('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  memberName: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  gender: string;

  @Column({ type: 'timestamp', nullable: true })
  birthday: Date;

  @Column({ type: 'int', nullable: true })
  weight: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 36 })
  createdBy: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  updatedBy: string;
}
