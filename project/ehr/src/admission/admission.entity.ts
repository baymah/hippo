import { BaseModel } from '../../../server-shared/database-utility';
import { PrimaryGeneratedColumn, Column,Entity } from 'typeorm';
import { IsDefined, IsBoolean  } from 'class-validator';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';


/**
 * the data structure for patient admission
 */
@Entity('admission')
export class Admission extends BaseModel {
    /**
     * the uniqueID for each admission
     */
    @IsDefined()
    @PrimaryGeneratedColumn('uuid')
    @ApiModelPropertyOptional()
    id: string;

    /**
     * the uniqueId for the patientId
     */
    @IsDefined()
    @Column({ type: 'varchar', nullable: false })
    @ApiModelProperty()
    patientId: string;

    /**
     * the name of the ward which the patient is admitted
     */
    @IsDefined()
    @Column({ type: 'varchar', nullable:false})
    @ApiModelProperty()
    ward: string;

    /**
     * the uniueId to track consultations
     */
    @IsDefined()
    @Column({ type: 'varchar'})
    @ApiModelProperty()
    consultationTrackId: string;

    /**
     * checks if the patient is discharged
     */
    @IsBoolean()
    @Column('boolean')
    @ApiModelProperty()
    isDischarged: boolean;
}
