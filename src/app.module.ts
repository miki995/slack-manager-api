import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    AuthModule,
  ],
  controllers: [ AppController ],
  providers: [
    AppService,
  ],
})
export class AppModule {
}
