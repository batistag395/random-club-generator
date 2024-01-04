import { Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";

@Injectable()

export class UpdateScoreboardUseCase {
    constructor(
        private readonly repository: PlayerRepository
    ){}

    async execute(id_player_1: string, id_player_2: string, goals_player_1: string, goals_player_2: string, status_match: string){
        const array_ids = [
            id_player_1, id_player_2
        ]

        for(const players of array_ids){
            const get_players = await this.repository.findOne(players)

            if(status_match === 'tie'){
                // await this.repository.
            }
        }

    }
}