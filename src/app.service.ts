import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IExchangeCodeQuery } from './models/exchange-code.model';
import { IFileQuery } from './models/file.model';

@Injectable()
export class AppService {

  private apiEndpoint = 'https://slack.com/api';

  constructor(private readonly httpService: HttpService) {
  }

  getFiles(query: IFileQuery): Observable<any> {

    const url = `${this.apiEndpoint}/files.list?token=${ query.token }&show_files_hidden_by_limit=${ query.show_files_hidden_by_limit }`;
    return this.httpService.get(url);
  }

  exchangeCodeForToken(query: IExchangeCodeQuery): Observable<any> {
    const clientId = process.env.clientId;
    const clientSecret = process.env.clientSecret;

    const url = `${this.apiEndpoint}/oauth.v2.access?code=${ query.code }&client_id=${ clientId }&client_secret=${ clientSecret }&redirect_uri=${ query.redirectUri }`;
    return this.httpService.get(url);
  }
}
