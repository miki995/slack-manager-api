import { HttpService, Injectable } from '@nestjs/common';
import { IExchangeCodeQuery } from '../../models/exchange-code.model';
import { Observable } from 'rxjs';

@Injectable()
export default class AuthService {

  private apiEndpoint = 'https://slack.com/api';

  constructor(
    private readonly httpService: HttpService) {
  }

  exchangeCodeForToken(query: IExchangeCodeQuery): Observable<any> {
    const clientId = process.env.clientId;
    const clientSecret = process.env.clientSecret;

    const url = `${ this.apiEndpoint }/oauth.v2.access?code=${ query.code }&client_id=${ clientId }&client_secret=${ clientSecret }&redirect_uri=${ query.redirectUri }`;
    return this.httpService.get(url);
  }
}
