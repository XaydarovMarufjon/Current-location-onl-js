import { Region } from './../../region/entities/region.entity';
import { Neighborhood } from './../../neighborhood/entities/neighborhood.entity';
import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";

export class CreateDistrictDto {

    @IsString()
    @Field()
    name: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    regionId: Region;

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
