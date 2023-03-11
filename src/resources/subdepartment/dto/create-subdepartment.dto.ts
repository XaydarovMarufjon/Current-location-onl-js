import { Field } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSubdepartmentDto {

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

    @IsNumber()
    @Field()
    departmentId: number;
}
