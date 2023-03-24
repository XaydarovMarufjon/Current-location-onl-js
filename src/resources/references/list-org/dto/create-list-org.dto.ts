import { Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateListOrgDto {
    
    @MaxLength(300)
    @IsNotEmpty()
    @IsString()
    @Field()
    name: string;

    @MaxLength(300)
    @IsString()
    @Field()
    nameuz: string;

    @MaxLength(300)
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
