import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { FilesModule } from './modules/files/files.module';
import { ConversationsModule } from './modules/conversations/conversations.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    FilesModule,
    ConversationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
