import { Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

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

    @IsString()
    @Field()
    departmentId: string;
}
