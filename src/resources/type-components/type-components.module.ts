import { Module } from '@nestjs/common';
import { TypeComponentsService } from './type-components.service';
import { TypeComponentsController } from './type-components.controller';

@Module({
  controllers: [TypeComponentsController],
  providers: [TypeComponentsService]
})
export class TypeComponentsModule {}
