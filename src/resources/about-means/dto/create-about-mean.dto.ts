import { Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
export class CreateAboutMeanDto {


    @IsString()
    @Field()
    code : string

    @IsString()
    @Field()
    toolDetails : string

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

}
