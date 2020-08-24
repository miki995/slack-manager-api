import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { FilesModule } from './modules/files/files.module';
import { ConversationsModule } from './modules/conversations/conversations.module';
import { UsersModule } from './modules/users/users.module';
import { SearchModule } from './modules/search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    FilesModule,
    ConversationsModule,
    UsersModule,
    SearchModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
