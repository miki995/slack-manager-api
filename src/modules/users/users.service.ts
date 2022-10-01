import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IQueryParams } from '../../models/file.model';
import { serialize } from '../../helpers/query-params.helper';

@Injectable()
export default class UsersService {

    private apiEndpoint = 'https://slack.com/api';

    constructor(private readonly httpService: HttpService) {
    }

    getUsers(query: IQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/users.list?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { authorization: query?.token } });
    }

    getProfile(query: IQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/users.profile.get?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { authorization: query?.token } });
    }
}
