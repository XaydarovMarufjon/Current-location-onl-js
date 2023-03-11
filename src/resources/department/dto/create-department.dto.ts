import { Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDepartmentDto {
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
}
