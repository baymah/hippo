import { Controller } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { Crud } from '@nestjsx/crud';
import { Consultation } from './consultation.entity';

@Crud({
  model: {
    type: Consultation,
  },
})
@Controller()
export class ConsultationController {
  constructor(public service: ConsultationService) {}
}
