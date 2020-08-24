import { HttpModule, Module } from '@nestjs/common';
import SearchService from './search.service';
import { SearchController } from './search.controller';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [
    SearchController,
  ],
  providers: [
    SearchService,
  ],
})
export class SearchModule {
}
