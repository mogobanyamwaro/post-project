import { Profile, User } from '@backend/backend/entities';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthUser } from '@backend/backend/decorators';
import { profile } from 'console';
@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({
    description: 'Create a new user',
  })
  @ApiBody({ type: User })
  @Post('/create')
  async createUser(@Body() user: User) {
    return await this.userService.createUser(user);
  }

  @ApiOperation({
    description: 'Create a new profile',
  })
  @ApiBody({ type: Profile })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post('/create-profile')
  async createProfile(@AuthUser() user: User, @Body() profile: Profile) {
    return await this.userService.createProfile(profile, user);
  }

  @ApiOperation({ description: 'Update a user' })
  @ApiBody({ type: User })
  @Put('/users/update')
  async updateUser(@Body() user: User) {
    return await this.userService.updateUser(user);
  }

  @ApiOperation({ summary: 'Find all users' })
  @Get('all-users')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll(@AuthUser() user: User) {
    return user;
  }
  @ApiOperation({ description: 'Delete a user' })
  @Delete('/users/delete')
  async deleteUser(user) {
    return await this.userService.deleteUser(user);
  }
}
