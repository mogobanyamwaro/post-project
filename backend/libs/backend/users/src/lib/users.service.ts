import { Profile, User } from '@backend/backend/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>
  ) {}

  async createUser(user: User) {
    const { password, ...rest } = user;
    const hashedPassword = await HashHelper.encrypt(password);

    return await this.userRepository.save(
      this.userRepository.create({ ...rest, password: hashedPassword })
    );
  }

  async updateUser(user: User) {
    return await this.userRepository.save(user);
  }

  async createProfile(profile: Profile, user: User) {
    profile.user = user;
    return await this.profileRepository.save(
      this.profileRepository.create(profile)
    );
  }

  async deleteUser(user: User) {
    return await this.userRepository.remove(user);
  }
  async getUserById(id: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }
  async findOneByEmailOrPhone(email: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .getOne();
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}

export class HashHelper {
  private static salt: string = bcrypt.genSaltSync(10);

  /**
   *
   * @param { string } string
   * @returns
   */
  public static async encrypt(string: string): Promise<string> {
    return bcrypt.hash(string, HashHelper.salt);
  }
}
