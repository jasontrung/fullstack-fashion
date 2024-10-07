import { Injectable, Logger } from '@nestjs/common';
import { UserDto, GetAllUsersQueries } from './dto/users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUser(userId: string): Promise<User> {
    console.log(process.env.DATABASE_URL);
    const user = await this.usersRepository.findOneBy({ id: userId });
    Logger.log(`Get user: ${user}`);
    return user;
  }
  getAllUsers(queries: GetAllUsersQueries) {
    // Queries from DB
    return `Get all users by queries: ${queries}`;
  }
  createUser(userData: UserDto): string {
    return `Create new user with data: ${userData}`;
  }
  updateUser(userId: string, userData: UserDto) {
    return `Update user with userId: ${userId} and userData: ${userData}`;
  }
  removeUser(userId: string) {
    return `Remove user with userId: ${userId}`;
  }
}
