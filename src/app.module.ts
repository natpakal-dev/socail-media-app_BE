import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/social_media?authSource=admin',
    ),
    PostsModule,
    AuthModule,
    UserModule,
    ConfigModule.forRoot(), // โหลดค่า environment variables จาก .env
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
