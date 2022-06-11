import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@Entity('profile')
export class Profile extends BaseEntity {
  @ApiProperty({
    description: 'Username of the user',
  })
  @Column({
    name: 'username',
    unique: true,
    nullable: true,
  })
  username: string;

  @Column({
    name: 'contact_phone_number',
    nullable: true,
  })
  contactPhoneNumber?: string;

  @ApiProperty({
    description: 'User first name',
  })
  @Column({
    name: 'first_name',
    nullable: true,
  })
  firstName?: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
