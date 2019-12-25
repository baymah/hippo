import { Controller } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { Crud } from '@nestjsx/crud';
import { Prescription } from './prescription.entity';

@Crud({
  model: {
    type: Prescription,
  },
})
@Controller()
export class PrescriptionController {
  constructor(public service: PrescriptionService) {}
}
