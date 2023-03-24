import { Module } from '@nestjs/common';
import { TypeComputerService } from './type-computer.service';
import { TypeComputerController } from './type-computer.controller';

@Module({
  controllers: [TypeComputerController],
  providers: [TypeComputerService]
})
export class TypeComputerModule {}
