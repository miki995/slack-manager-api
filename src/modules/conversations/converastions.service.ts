import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IFilesQueryParams } from '../../models/file.model';
import { serialize } from '../../helpers/query-params.helper';

@Injectable()
export default class ConversationsService {

    private apiEndpoint = 'https://slack.com/api';

    constructor(private readonly httpService: HttpService) {
    }

    getConversations(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/conversations.list?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { authorization: query?.token } });
    }
}
