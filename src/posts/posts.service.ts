import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schema/post.schema';
// import { v4 as uuidv4 } from 'uuid';
import { createPostRequestDto } from './dto/create-post-request.dto';
import { updatePostRequestDto } from './dto/update-post-request.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name)
    private readonly PostModel: Model<Post>,
  ) {}

  async create(body: createPostRequestDto): Promise<Post> {
    const createPost = new this.PostModel(body);
    const result = await createPost.save();
    return result;
  }

  async update(
    id: string,
    updatePostModel: updatePostRequestDto,
  ): Promise<Post> {
    const result = await this.PostModel.findByIdAndUpdate(id, updatePostModel, {
      new: true,
    }).exec();
    if (!result) {
      throw new NotFoundException(`Post not found ${id}`);
    }
    return result;
  }

  async fineAll(): Promise<Post[]> {
    return this.PostModel.find().sort({ createdAt: -1 }).exec();
  }

  async fineOne(id: string): Promise<Post> {
    const result = await this.PostModel.findById(id).exec();
    if (!result) {
      throw new NotFoundException(`Post not found ${id}`);
    }
    return result;
  }

  async remove(id: string): Promise<string> {
    const result = await this.PostModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Post not found ${id}`);
    }
    return `Removed Success`;
  }
}
