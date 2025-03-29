import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, CreatePostSchema } from './schema/create-post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: CreatePostSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
