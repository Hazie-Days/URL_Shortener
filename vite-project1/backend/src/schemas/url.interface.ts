import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Url extends Document {
  @Prop({ required: true })
  urlId: string;

  @Prop({ required: true })
  origUrl: string;

  @Prop({ required: true })
  shortUrl: string;

  @Prop({ required: true, default: 0 })
  clicks: number;

  @Prop({ default: Date.now() })
  createdDate: Date;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
