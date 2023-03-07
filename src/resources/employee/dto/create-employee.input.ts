import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateEmployeeInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  organization: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  department: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  position: string;

  @IsString()
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @Field()
  phone: string;

  @IsString()
  @Field()
  role: number;

  @IsString()
  @Field()
  photo: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  userId: number;
}
