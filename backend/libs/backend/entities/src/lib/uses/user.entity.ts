import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';

import { Exclude } from 'class-transformer';
import { Profile } from './profile.entity';
import { Posts } from '../posts/post.entity';
import { AccessToken, RefreshToken } from '../auth';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty({ description: 'email of the user' })
  @Column({
    name: 'email',
    unique: true,
  })
  email: string;
  @ApiProperty({ description: 'password of the user' })
  @Exclude()
  @Column({
    name: 'password',
  })
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user, {
    eager: true,
    cascade: ['insert', 'remove', 'soft-remove', 'update'],
  })
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @OneToMany(() => Posts, (post) => post.user)
  @JoinColumn({ name: 'post_id' })
  posts: Posts[];

  @OneToMany(() => RefreshToken, (refreshTokens) => refreshTokens.user)
  @JoinColumn({ name: 'user_id' })
  refreshTokens: RefreshToken[];

  @OneToMany(() => AccessToken, (accessTokens) => accessTokens.user)
  @JoinColumn({ name: 'user_id' })
  accessTokens: AccessToken[];
}
