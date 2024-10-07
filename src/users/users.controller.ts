import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, GetAllUsersQueries } from './dto/users.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}
  @Get(':id')
  async getUser(@Param('id') userId: string): Promise<User> {
    const userService: User = await this.usersService.getUser(userId);
    return userService;
  }

  @Get()
  getAll(@Query() queries: GetAllUsersQueries) {
    return this.usersService.getAllUsers(queries);
  }

  @Post('new')
  createUser(@Body() createUserDto: UserDto): string {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
  updateUser(@Param('id') userId: string, @Body() userData: UserDto) {
    return this.usersService.updateUser(userId, userData);
  }

  @Delete(':id')
  removeUser(@Param('id') userId: string) {
    return this.usersService.removeUser(userId);
  }
}
