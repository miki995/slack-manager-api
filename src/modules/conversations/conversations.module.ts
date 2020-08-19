import { HttpModule, Module } from '@nestjs/common';
import ConversationsService from './converastions.service';
import { ConversationsController } from './conversations.controller';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [
    ConversationsController,
  ],
  providers: [
    ConversationsService,
  ],
})
export class ConversationsModule {
}
