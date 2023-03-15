import { Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePositionDto {

    @IsNotEmpty()
    @IsString()
    @Field()
    name: string;

    @IsString()
    @Field()
    nameuz: string;
    
    @IsString()
    @Field()
    nameru: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    listOrgId: string
}
