import { Field } from '@nestjs/graphql';
import {IsEmail, IsNotEmpty,IsString } from 'class-validator';

export class CreateTestDto {
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
  
    @Field()
    role: number;
  
    @IsString()
    @Field()
    photo: string;
  
    @IsNotEmpty()
    @Field()
    userId: number;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    username: string;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    password: string;
}
