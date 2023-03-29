import { Field } from "@nestjs/graphql";
import {  IsNotEmpty,  IsNumber,  IsString } from "class-validator";

export class CreateAddressDto {

    @IsString()
    @Field()
    houseNum: string;

    @IsNumber()
    @Field()
    flatNum: number;

    @IsString()
    @Field()
    homeNum: string;

    @IsNumber()
    @Field()
    postCode: number;
 
    @IsString()
    @Field()
    geoLocation: string;
  
    @IsString()
    @Field()
    moreInfo: string;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    continent: string;
  
    @IsNotEmpty()
    @IsString()
    @Field()
    country: string;
  
    @IsString()
    @Field()
    region: string;
  
    @IsString()
    @Field()
    district: string;
  
    @IsString()
    @Field()
    neighborhood: string;

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
