import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prescription } from './prescription.entity';
import { PrescriptionController } from './prescription.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Prescription]),
  ],
  
  providers: [PrescriptionService],
  controllers: [PrescriptionController],
})

  export class PrescriptionModule {}