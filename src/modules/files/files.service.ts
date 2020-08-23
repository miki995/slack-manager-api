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
    return this.httpService.get(url);
  }

  getRemoteFiles(query: IFilesQueryParams): Observable<any> {

    const url = `${ this.apiEndpoint }/files.remote.list?${ serialize(query) }`;
    return this.httpService.get(url);
  }

  getFile(query: IFilesQueryParams): Observable<any> {

    const url = `${ this.apiEndpoint }/files.info?${ serialize(query) }`;
    return this.httpService.get(url);
  }

  getRemoteFile(query: IFilesQueryParams): Observable<any> {

    const url = `${ this.apiEndpoint }/files.remote.info?${ serialize(query) }`;
    return this.httpService.get(url);
  }
}
