import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostRequestDto } from './dto/create-post-request.dto';
import { updatePostRequestDto } from './dto/update-post-request.dto';
@Controller('api')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Post('/posts')
  create(@Body() createPostRequestDto: createPostRequestDto) {
    return this.postsService.create(createPostRequestDto);
  }

  @Patch('/post/:id')
  update(
    @Param('id') id: string,
    @Body() updatePostRequestDto: updatePostRequestDto,
  ) {
    return this.postsService.update(id, updatePostRequestDto);
  }

  @Get('/posts')
  findAll() {
    return this.postsService.fineAll();
  }

  @Get('/post/:id')
  findOne(@Param('id') id: string) {
    return this.postsService.fineOne(id);
  }

  @Delete('/post/:id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
