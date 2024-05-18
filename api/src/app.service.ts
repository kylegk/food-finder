import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { User } from './users/schemas/user.schema';

@Injectable()
export class AppService {
  constructor(private usersService: UsersService) {}
  async getHello(email: string): Promise<string> {
    const user: User = await this.usersService.findByEmail(email);
    return `Hello ${user.firstName}!`;
  }
}
