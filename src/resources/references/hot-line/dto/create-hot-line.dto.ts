import { Field } from "@nestjs/graphql";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateHotLineDto {
    

    @IsString()
    @Field()
    fullName: string;

    @IsString()
    @Field()
    contact: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    description: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    answer: string;

    @IsString()
    @Field()
    employeeId: string;

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
