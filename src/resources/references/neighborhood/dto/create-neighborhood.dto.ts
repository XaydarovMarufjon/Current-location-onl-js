import { District } from './../../district/entities/district.entity';
import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";


export class CreateNeighborhoodDto {
    @IsString()
    @Field()
    name: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    districtId: District;

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
