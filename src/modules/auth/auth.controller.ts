import { Controller, Get, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import AuthService from './auth.service';
import { IExchangeCodeQuery } from '../../models/exchange-code.model';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Get('')
  async exchangeCodeForToken(@Query() query: IExchangeCodeQuery) {

    return this.authService.exchangeCodeForToken(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }
}
