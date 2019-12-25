import { Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from './consultation.entity';
import { ConsultationController } from './consultation.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Consultation]),
  ],
  
  providers: [ConsultationService],
  controllers: [ConsultationController],
})

  export class ConsultationModule {}