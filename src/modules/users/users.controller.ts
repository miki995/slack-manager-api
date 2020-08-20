import { Controller, Get, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { IFilesQueryParams } from '../../models/file.model';
import UsersService from './users.service';

@Controller('api/users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {
  }

  @Get('list')
  async getFiles(@Query() query: IFilesQueryParams) {

    return this.usersService.getUsers(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }
}
