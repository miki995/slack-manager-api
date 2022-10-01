import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { IFilesQueryParams } from '../../models/file.model';
import ConversationsService from './converastions.service';
import { HttpServiceInterceptor } from '../../interceptors/http-service.interceptor';

@Controller('api/conversations')
@UseInterceptors(HttpServiceInterceptor)
export class ConversationsController {

  constructor(private readonly conversationsService: ConversationsService) {
  }

  @Get('list')
  async getConversations(@Query() query: IFilesQueryParams) {

    return this.conversationsService.getConversations(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }
}
