import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({require : true})
  username: string;

  @Prop()
  email: string;

  @Prop({require : true})
  password: string;

  @Prop()
  rule : string;

}

export const USerSchema = SchemaFactory.createForClass(User);