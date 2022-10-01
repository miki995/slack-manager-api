import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IFilesQueryParams } from '../../models/file.model';
import { serialize } from '../../helpers/query-params.helper';

@Injectable()
export default class SearchService {

    private apiEndpoint = 'https://slack.com/api';

    constructor(private readonly httpService: HttpService) {
    }

    searchFiles(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/search.files?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { authorization: query?.token } });
    }
}
