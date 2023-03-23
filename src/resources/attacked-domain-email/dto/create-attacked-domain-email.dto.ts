import { IsNotEmpty } from 'class-validator';
import { Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';
export class CreateAttackedDomainEmailDto {

    @IsString()
    @Field()
    code: string;

    @IsString()
    @Field()
    email: string;
    
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
    creatorId?: string;

    @IsString()
    @Field()
    editorId?: string;

    @IsString()
    @Field()
    removerId?: string;

}
   