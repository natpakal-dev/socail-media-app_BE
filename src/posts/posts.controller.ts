import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostRequestDto } from './dto/create-post-request.dto';
import { updatePostRequestDto } from './dto/update-post-request.dto';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostRequestDto: createPostRequestDto) {
    return this.postsService.create(createPostRequestDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostRequestDto: updatePostRequestDto,
  ) {
    return this.postsService.update(id, updatePostRequestDto);
  }

  @Get()
  findAll() {
    return this.postsService.fineAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.fineOne(id);
  }
}
