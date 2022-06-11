import { Posts, User } from '@backend/backend/entities';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from '@backend/backend/decorators';
@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create')
  @ApiOperation({ description: 'Create a new post' })
  @ApiBody({ type: Posts })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async createPost(@Body() post: Posts, @AuthUser() user: User) {
    return await this.postService.createPost(post, user);
  }

  @Put('/update/:id')
  @ApiBody({ type: Posts })
  @ApiOperation({ description: 'update a new post' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async updatePost(
    @AuthUser() user: User,
    @Param('id') id: string,
    @Body() post: Posts
  ) {
    console.log(user);
    return await this.postService.updatePost(id, user, post);
  }

  @Post('/delete/:id')
  @ApiBearerAuth()
  @ApiOperation({ description: 'delete a new post' })
  @UseGuards(AuthGuard('jwt'))
  async deletePost(@Param('id') id: string) {
    return await this.postService.deletePost(id);
  }

  @Get('/all-posts')
  @ApiBearerAuth()
  @ApiOperation({ description: 'find all posts' })
  @UseGuards(AuthGuard('jwt'))
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }
}
