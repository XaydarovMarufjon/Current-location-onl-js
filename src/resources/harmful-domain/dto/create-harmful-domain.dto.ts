import { IsNotEmpty } from 'class-validator';
import { Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
export class CreateHarmfulDomainDto {

    @IsString()
    @Field()
    hosting: string;

    @IsString()
    @Field()
    domainSupport: string;
    
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
