import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import  Game  from 'src/typeorm/entities/game.entity';
import { CreateGameParams, UpdateGameParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
    constructor(
        @InjectRepository(Game)
        private gameRepository:Repository<Game>,){}
    findGames(){
        return this.gameRepository.find();
    }
    createGame( createGameDetails:CreateGameParams){
        const newGame = this.gameRepository.create({...createGameDetails});
        return this.gameRepository.save(newGame);
    }
    updateGame(id: number, updateGameDetails: UpdateGameParams){
        return this.gameRepository.update({ id }, {...updateGameDetails });
    }
    deleteGame(id:number){
        return this.gameRepository.delete({ id });
    }

}


