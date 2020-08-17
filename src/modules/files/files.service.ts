import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IFileQuery } from '../../models/file.model';

@Injectable()
export default class FilesService {

  private apiEndpoint = 'https://slack.com/api';

  constructor(private readonly httpService: HttpService) {
  }

  getFiles(query: IFileQuery): Observable<any> {

    const url = `${ this.apiEndpoint }/files.list?token=${ query.token }&show_files_hidden_by_limit=${ query.show_files_hidden_by_limit }`;
    return this.httpService.get(url);
  }

  getRemoteFiles(query: IFileQuery): Observable<any> {

    const url = `${ this.apiEndpoint }/files.remote.list?token=${ query.token }&show_files_hidden_by_limit=${ query.show_files_hidden_by_limit }`;
    return this.httpService.get(url);
  }
}
