import { Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";


export class CreateTypeIncidentDto {
 
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
    code: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    vector: string;

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
     
