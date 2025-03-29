import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Post extends Document {
  @Prop()
  community: string;

  @Prop()
  title: string;

  @Prop()
  content: string;
}

export const CreatePostSchema = SchemaFactory.createForClass(Post);
