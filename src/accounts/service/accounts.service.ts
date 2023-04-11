import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/typeorm/entities/account.entity';
import { CreateAccountParams, UpdateAccountParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class AccountsService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,){

    }
    findAccounts(){
        return this.accountRepository.find();
    }
    createAccount( accountDetails: CreateAccountParams){
        const newAccount = this.accountRepository.create({ 
            ...accountDetails 
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
