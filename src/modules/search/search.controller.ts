import { Controller, Get, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { IFilesQueryParams } from '../../models/file.model';
import SearchService from './search.service';

@Controller('api/search')
export class SearchController {

  constructor(private readonly searchService: SearchService) {
  }

  @Get('files')
  async searchFiles(@Query() query: IFilesQueryParams) {

    return this.searchService.searchFiles(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }
}
