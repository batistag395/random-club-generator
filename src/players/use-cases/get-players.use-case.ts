import { Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";

@Injectable()

export class GetPlayersUseCase {
    constructor(private readonly playerRepository: PlayerRepository){}

    async execute(){
        const players = await this.playerRepository.findAll()
        if(!players){
            return []
        }
        return players
    }
}