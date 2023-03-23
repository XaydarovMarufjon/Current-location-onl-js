import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";

export class CreateEmployeeNameDto {
    
    @IsString()
    @Field()
    code: string;

    @IsString()
    @Field()
    fullName: string;
    
    @IsNotEmpty()
    @IsString()
    @Field()
    nameuz: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    nameru: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    creatorId: string;

    @IsString()
    @Field()
    editorId: string;

    @IsString()
    @Field()
    removerId: string;

    @IsString()
    @Field()
    createdAt: string;

    @IsString()
    @Field()
    updatedAt: string;
}
