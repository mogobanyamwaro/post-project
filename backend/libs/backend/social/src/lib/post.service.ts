import { Posts, User } from '@backend/backend/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class PostService {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>
  ) {}

  async createPost(post: Posts, user: User) {
    post.user = user;
    return await this.postRepository.save(this.postRepository.create(post));
  }
  async updatePost(id: string, user: User, post: Posts) {
    const exist = await this.postRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });
    console.log('here');
    console.log(id);
    console.log(exist);
    if (exist.user.id === user.id) {
      return await this.postRepository.save(post);
    }
    return {
      message: 'You are not allowed to update this post',
    };
  }

  async deletePost(id: string) {
    await this.postRepository.delete(id);
    return {
      message: 'Post deleted',
    };
  }

  async getMyPosts(userId: string) {
    return await this.postRepository.find({ where: { user: { id: userId } } });
  }

  async getAllPosts() {
    return await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user')
      .getMany();
  }
}
