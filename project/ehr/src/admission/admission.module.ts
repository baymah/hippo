import { Module } from '@nestjs/common';
import { AdmissionService } from './admission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admission } from './admission.entity';
import { AdmissionController } from './admission.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admission]),
  ],
  
  providers: [AdmissionService],
  controllers: [AdmissionController],
})

  export class AdmissionModule {}