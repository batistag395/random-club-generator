import { Injectable, NotFoundException } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";

@Injectable()

export class GetConfrontationUseCase {
    constructor(
        private readonly repository: PlayerRepository
    ){}

    async execute(){
        const confrontation = await this.repository.getConfrontation()
        if(confrontation){
            return confrontation
        }else{
            throw new NotFoundException({message: `No confrontation found.`})
        }
    }
}