import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IFilesQueryParams } from '../../models/file.model';
import { serialize } from '../../helpers/query-params.helper';

@Injectable()
export default class FilesService {

    private apiEndpoint = 'https://slack.com/api';

    constructor(private readonly httpService: HttpService) {
    }

    getFiles(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/files.list?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { Authorization: `Bearer ${query?.token}` } });
    }

    getRemoteFiles(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/files.remote.list?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { Authorization: `Bearer ${query?.token}` } });
    }

    getFile(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/files.info?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { Authorization: `Bearer ${query?.token}` } });
    }

    getRemoteFile(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/files.remote.info?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { Authorization: `Bearer ${query?.token}` } });
    }

    deleteFile(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/files.delete?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { Authorization: `Bearer ${query?.token}` } });
    }

    deleteRemoteFile(query: IFilesQueryParams): Observable<any> {

        const url = `${ this.apiEndpoint }/files.remote.delete?${ serialize(query) }`;
        return this.httpService.get(url, { headers: { Authorization: `Bearer ${query?.token}` } });
    }
}
