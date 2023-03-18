import { Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTypeComputerDto {

    @IsString()
    @Field()
    incidentTypes :  string

    @IsString()
    @Field()
    code :  string

    @IsString()
    @Field()
    vector :  string  
 
    @IsNotEmpty()
    @IsString()
    @Field()
    nameuz: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    nameru: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    creatorId: string;

    @IsString()
    @Field()
    editorId: string;

    @IsString()
    @Field()
    removerId: string;

    @IsString()
    @Field()
    createdAt: string;

    @IsString()
    @Field()
    updatedAt: string;

}
