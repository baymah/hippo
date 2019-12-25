import { Routes } from 'nest-router';
import { AdmissionModule } from '../ehr/src/admission/admission.module';
import { ConsultationModule } from '../ehr/src/consultation/consultation.module';
import { LabtestModule } from '../ehr/src/labtest/labtest.module';
import { PrescriptionModule } from '../ehr/src/prescription/prescription.module';
import { ReviewModule } from '../ehr/src/review/review.module';
import { StaffModule } from '../ehr/src/staff/staff.module';


export const internalRoutes: Routes = [
    {
      path: '/admission',
      module: AdmissionModule,
    },
    {
      path:'/consultation',
      module:ConsultationModule,
    },
    {
      path:'/labtest',
      module:LabtestModule,
    },
    {
      path:'/prescription',
      module:PrescriptionModule,
    },
    {
      path:'/review',
      module:ReviewModule,
    },
    {
      path:'/staff',
      module:StaffModule,
    }

  ];

  export const routes: Routes = [
    {
      path: '/api',
      children: [
        // { path: 'external', children: externalRoutes },
        { path: '/internal', children: internalRoutes },
      ],
    },
  ];
