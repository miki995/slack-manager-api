import { Controller, Get, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import FilesService from './files.service';
import { IFileQuery } from '../../models/file.model';

@Controller('api/files')
export class FilesController {

  constructor(private readonly filesService: FilesService) {
  }

  @Get('list')
  async getFiles(@Query() query: IFileQuery) {

    return this.filesService.getFiles(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }

  @Get('remote/list')
  async getRemoteFiles(@Query() query: IFileQuery) {

    return this.filesService.getRemoteFiles(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }
}
