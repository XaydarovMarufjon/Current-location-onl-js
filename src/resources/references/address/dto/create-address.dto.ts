import { MacroRegional } from './../../macro-regional/entities/macro-regional.entity';
import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsString } from "class-validator";

export class CreateAddressDto {

    @IsString()
    @Field()
    houseId: number;

    @IsNotEmpty()
    @IsString()
    @Field()
    flatId: number;

    @IsNotEmpty()
    @IsString()
    @Field()
    homeId: number;

    @IsNotEmpty()
    @IsString()
    @Field()
    postCode: number;
 
    @IsNotEmpty()
    @IsString()
    @Field()
    geoLocation: string;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    moreInfo: string;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    macroRegionalId: MacroRegional  ;

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
