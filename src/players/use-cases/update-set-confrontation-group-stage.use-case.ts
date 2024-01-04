import { BadRequestException, Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";
import { UpdateScoreboardUseCase } from "./update-scoreboard.use-case";

@Injectable()

export class UpdateSetConfrontationGroupStageUseCase {
    constructor(
        private readonly playerRepository: PlayerRepository,
        private readonly useCase: UpdateScoreboardUseCase
        ){}

    async execute(id: string, goals_player_1 = '0', goals_player_2 = '0'){
        
        const confrontation = await this.playerRepository.getConfrontationById(id)
        if(!confrontation.played){
            const winner = (+goals_player_1 > +goals_player_2) ? confrontation.id_player_1 : 
               (+goals_player_1 < +goals_player_2) ? confrontation.id_player_2 : "tie";

            await this.playerRepository.updateConfrontation(confrontation.id, winner, true)
            // await this.useCase.execute()
        }else {
            throw new BadRequestException({message: `Confrontation already up to date`})
        }
    }
}