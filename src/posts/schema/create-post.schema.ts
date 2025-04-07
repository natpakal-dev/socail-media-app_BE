import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Post extends Document {
  @Prop({ required: true })
  community: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
}

export const CreatePostSchema = SchemaFactory.createForClass(Post);
