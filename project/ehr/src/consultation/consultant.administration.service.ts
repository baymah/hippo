import { Injectable } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation.entity';
import {
  Pagination,
  PaginationOptionsInterface,
} from '../../../server-shared/paginate';

/**
 * service responsible for retrieval and update of user information
 */
@Injectable()
export class ConsultantAdministrationService {
  constructor(private consultationService: ConsultationService) {}

  /**
   * Consultant/Doctor Create new Consultation
   */
  async createConsultantConsultation(
    consultantId: string,
    consultation: Consultation,
  ) {
    consultation.consultantId = consultantId;
    return this.consultationService.repository.create(consultation);
  }

  /**`
   * Paginated doctor/consultant history
   */

  async paginate(
    consultantId: string,
    options: PaginationOptionsInterface,
  ): Promise<Pagination<Consultation>> {
    const [
      results,
      total,
    ] = await this.consultationService.repository.findAndCount({
      take: options.limit,
      skip: options.page, // think this needs to be page * limit

      where: {
        consultantId,
      },
    });

    // TODO add more tests for paginate

    return new Pagination<Consultation>({
      results,
      total,
    });
  }
}
