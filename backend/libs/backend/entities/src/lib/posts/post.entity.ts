import { ApiProperty } from '@nestjs/swagger';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../uses';
import { v4 } from 'uuid';

@Entity('posts')
export class Posts extends BaseEntity {
  @PrimaryColumn('varchar', {
    length: 50,
  })
  id: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
  @BeforeInsert()
  addId() {
    this.id = v4();
  }
  @ApiProperty({ description: 'The title of the post' })
  @Column({ name: 'title' })
  title: string;

  @ApiProperty({ description: 'The content of the post' })
  @Column({ name: 'content' })
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'post_id' })
  user: User;
}
