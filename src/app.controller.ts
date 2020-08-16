import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';
import { IExchangeCodeQuery } from './models/exchange-code.model';
import { IFileQuery } from './models/file.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('api/files')
  async getFiles(@Query() query: IFileQuery) {

    return this.appService.getFiles(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }

  @Get('api/auth')
  async exchangeCodeForToken(@Query() query: IExchangeCodeQuery) {

    return this.appService.exchangeCodeForToken(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }
}
