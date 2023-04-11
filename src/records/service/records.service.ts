import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import Records from 'src/typeorm/entities/records.entity';
import { CreateRecordParams, UpdateRecordParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class RecordsService {
    constructor(@InjectRepository(Records)
    private recordRepository:Repository<Records>,){}
    findRecords(){
        return this.recordRepository.find();
    }
    createRecord(recordDetails:CreateRecordParams){
        const newRecord = this.recordRepository.create({
            ...recordDetails
        });
        return this.recordRepository.save(newRecord);
    } 
    updateRecord(id: number, updateRecordDetails: UpdateRecordParams){
        return this.recordRepository.update({ id }, {...updateRecordDetails });
    }
    deleteRecord(id:number){
        return this.recordRepository.delete({ id });
    }











    
}
