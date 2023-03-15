import { Field } from '@nestjs/graphql';
import {IsEmail, IsNotEmpty,IsNumber,IsString } from 'class-validator';

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
    @IsNumber()
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
    @IsNumber()
    role: string;
  
    @IsString()
    @Field()
    photo: string;
  
    @IsNotEmpty()
    @IsNumber()
    @Field()
    userId: string;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    username: string;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    password: string;
}
