import { MacroRegional } from './../../macro-regional/entities/macro-regional.entity';
import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";

export class CreateCountryDto {


    @IsString()
    @Field()
    name: string;

    @IsString()
    @Field()
    digitalCode: string;

    @IsString()
    @Field()
    letterCountryCode: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    macroRegionalId: MacroRegional;
    
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
