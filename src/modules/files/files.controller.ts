import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { map } from 'rxjs/operators';
import FilesService from './files.service';
import { IFilesQueryParams } from '../../models/file.model';
import { HttpServiceInterceptor } from '../../interceptors/http-service.interceptor';

@Controller('api/files')
@UseInterceptors(HttpServiceInterceptor)
export class FilesController {

  constructor(private readonly filesService: FilesService) {
  }

  @Get('list')
  async getFiles(@Query() query: IFilesQueryParams) {

    return this.filesService.getFiles(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }

  @Get('remote/list')
  async getRemoteFiles(@Query() query: IFilesQueryParams) {

    return this.filesService.getRemoteFiles(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }

  @Get('info')
  async getFileInfo(@Query() query: IFilesQueryParams) {

    return this.filesService.getFile(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }

  @Get('remote/info')
  async getRemoteFileInfo(@Query() query: IFilesQueryParams) {

    return this.filesService.getRemoteFile(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }

  @Get('delete')
  async deleteFile(@Query() query: IFilesQueryParams) {

    return this.filesService.deleteFile(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }

  @Get('remote/delete')
  async deleteRemoteFile(@Query() query: IFilesQueryParams) {

    return this.filesService.deleteRemoteFile(query)
      .pipe(
        map(response => {
          return response.data;
        }),
      );
  }
}
