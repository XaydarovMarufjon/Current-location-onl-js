
import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";

export class CreateMethodViolatorDto {
    @IsString()
    @Field()
    techniqueCode: string;

    @IsString()
    @Field()
    nameTechnique: string;

    @IsString()
    @Field()
    MITRECode: string;
    
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

   
}
