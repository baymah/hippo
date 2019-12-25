import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdmissionModule } from '../ehr/src/admission/admission.module';
import { ConsultationModule } from '../ehr/src/consultation/consultation.module';
import { LabtestModule } from '../ehr/src/labtest/labtest.module';
import { PrescriptionModule } from '../ehr/src/prescription/prescription.module';
import { ReviewModule } from '../ehr/src/review/review.module';
import { StaffModule } from '../ehr/src/staff/staff.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AdmissionModule,
    ConsultationModule,
    LabtestModule,
    PrescriptionModule,
    ReviewModule,
    StaffModule,
    TypeOrmModule.forRoot(),
    RouterModule.forRoutes(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
