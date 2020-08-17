import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
