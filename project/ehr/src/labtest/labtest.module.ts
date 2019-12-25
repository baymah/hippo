import { Module } from '@nestjs/common';
import { LabTestService } from './labtest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LabTest } from './labtest.entity';
import { LabTestController } from './labtest.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([LabTest]),
  ],
  
  providers: [LabTestService],
  controllers: [LabTestController],
})

  export class LabtestModule {}