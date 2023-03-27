import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";

export class CreateCityDto {
    @IsString()
    @Field()
    cityName: string;

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
    creatorId?: string;

    @IsString()
    @Field()
    editorId?: string;

    @IsString()
    @Field()
    removerId?: string;
}