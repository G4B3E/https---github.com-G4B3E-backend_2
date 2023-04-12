import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/account.entity';
import { CreateAccountParams, UpdateAccountParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,){

    }
    findAccounts(){
        return this.accountRepository.find();
    }
    async createAccount( accountDetails: CreateAccountParams){
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(accountDetails.password, salt);
        console.log({ 
            ...accountDetails,
            password: hashPassword
        })
        const newAccount = this.accountRepository.create({ 
            ...accountDetails,
            password: hashPassword
        });
        
        return this.accountRepository.save(newAccount);
    }
    updateAccount(id: number, updateAccountDetails: UpdateAccountParams){
        return this.accountRepository.update({ id }, {...updateAccountDetails });
    }
    deleteAccount(id:number){
        return this.accountRepository.delete({ id });
    }
}
