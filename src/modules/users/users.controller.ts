import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { IFilesQueryParams } from '../../models/file.model';
import UsersService from './users.service';
import { HttpServiceInterceptor } from '../../interceptors/http-service.interceptor';

@Controller('api/users')
@UseInterceptors(HttpServiceInterceptor)
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

    @Get('profile')
    async getProfile(@Query() query: IFilesQueryParams) {

        return this.usersService.getProfile(query)
            .pipe(
                map(response => {
                    return response.data;
                }),
            );
    }
}
