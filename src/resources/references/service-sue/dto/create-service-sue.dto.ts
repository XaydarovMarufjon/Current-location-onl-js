import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";


export class CreateServiceSueDto {
    
    @IsString()
    @Field()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    @Field()
    nameuz: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    nameru: string;

    @IsString()
    @Field()
    creatorId?: string;

    @IsString()
    @Field()
    editorId?: string;

    @IsString()
    @Field()
    removerId?: string;

}