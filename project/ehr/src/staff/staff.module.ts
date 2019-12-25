import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff.entity';
import { StaffController } from './staff.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Staff]),
  ],
  
  providers: [StaffService],
  controllers: [StaffController],
})

  export class StaffModule {}