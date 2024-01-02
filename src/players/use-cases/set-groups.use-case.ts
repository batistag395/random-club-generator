import { BadRequestException, Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";

@Injectable()
export class SetGroupsUseCase {
    constructor(private readonly playerRepository: PlayerRepository){}

    async execute(number_of_groups?: string): Promise<void>{
            const player = await this.playerRepository.findAll();

            for (let i = player.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [player[i], player[j]] = [player[j], player[i]];
            }    
        
            let count = 0;
            let players = 0;
            let group_number = 1;
            
            const qtd = Object.keys(player).length;
            
            for(const i in player){
            let payload = {
                group: "",
            }
            if(player[players].group === null){
                if(count <= (qtd/parseInt(number_of_groups))){
                    if(count === (qtd/parseInt(number_of_groups))){
                        group_number ++;
                        count = 0;
                    }
                    payload = {
                        group: group_number.toString()
                    }
                    this.playerRepository.update(player[players].id, payload)
                    players++
                    count++
                }
            }else{
                throw new BadRequestException('Os grupos ja foram definidos!')
            }
        }
    }
}