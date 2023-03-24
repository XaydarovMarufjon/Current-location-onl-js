import { Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePersonalDto {
    
    @IsNotEmpty()
    @IsString()
    @Field()
    firstName: string;

    @IsString()
    @Field()
    middleName: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    lastName: string;

    @IsString()
    @Field()
    phone: string;

    @IsEmail()
    @IsString()
    @Field()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    position: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    organization: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    department: string;

    @IsString()
    @Field()
    subdepartment: string;

    @IsString()
    @Field()
    photo: string;
}
