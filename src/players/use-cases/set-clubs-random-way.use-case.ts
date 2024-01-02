import { BadRequestException, Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";
import { TeamRepository } from "src/teams/repositories/team.repository";

@Injectable()

export class SetClubsRandomWayUseCase {
    constructor(
        private readonly playersRepository: PlayerRepository,
        private readonly teamsRepository: TeamRepository
    ){}

    async execute(){
        const player = await this.playersRepository.findAll();
        if(!player){
            throw new BadRequestException('Nenhum jogador cadastrado.')
        }
        const team = await this.teamsRepository.findAll();
        if(!team){
            throw new BadRequestException('Nenhum time cadastrado.')
        }

        for (let i = player.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [player[i], player[j]] = [player[j], player[i]];
        }
    
        for (let i = team.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [team[i], team[j]] = [team[j], team[i]];
        }
        if(player){
          let count = 0
          for(const i of team){
            const payload = {
              team_name: i.team_name,
            }
            if(player[count].team_name === null){
              await this.playersRepository.update(player[count].id, payload)
            }else{
              throw new BadRequestException('Todos os jogadores estao com equipes atribuidas.')
            }
            count++
          }
          return player;
        }
    }
}