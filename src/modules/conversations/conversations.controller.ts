import { Controller, Get, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { IFilesQueryParams } from '../../models/file.model';
import ConversationsService from './converastions.service';

@Controller('api/conversations')
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
