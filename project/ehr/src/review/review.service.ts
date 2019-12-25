import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Review } from './review.entity';
import { Repository } from 'typeorm';

/**
 * CRUD service for LabTest model
 */
@Injectable()
export class ReviewService extends TypeOrmCrudService<Review> {
  constructor(@InjectRepository(Review) public repository: Repository<Review>) {
    super(repository);
  }

}

