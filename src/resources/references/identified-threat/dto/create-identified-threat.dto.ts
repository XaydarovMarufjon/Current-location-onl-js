import { Field } from "@nestjs/graphql";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateIdentifiedThreatDto {

    @IsString()
    @Field()
    code: string;

    @IsString()
    @Field()
    threatSource: string;

    @IsString()
    @Field()
    nameuz: string;

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
