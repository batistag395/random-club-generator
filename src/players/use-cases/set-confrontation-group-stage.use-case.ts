import { Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";
import { setConfrontationDto } from "../dto/create-player.dto";

@Injectable()

export class SetConfrontationGroupStageUseCase {
    constructor(private readonly playerRepository: PlayerRepository){}

    async execute(){
        const player = await this.playerRepository.findAll();
        const groupNumber = await this.playerRepository.findGroupNumber()
    
        const groupList = {}
        for(var i = 1; i <= groupNumber.length; i++){
            const players = player.filter((item) => 
            +item.group ===  i
            )
            for(var k = 0; k < players.length; k++) {
                for (var j = k + 1; j < players.length; j++) {
     
                    if(!(`group_${i}` in groupList)){
                        groupList[`group_${i}`] = []
                    }
                    groupList[`group_${i}`].push({
                        id_player_1: players[k].id,
                        player_1: players[k].player_name,
                        id_player_2:players[j].id,
                        player_2:  players[j].player_name,
                        // grupo: i,
                    })
                    console.log(players[j].id)
                    groupList[`group_${i}`].push({
                        id_player_1: players[j].id,
                        player_1:  players[j].player_name,
                        id_player_2: players[k].id,
                        player_2: players[k].player_name,
                        // grupo: i,
                    })
                }
            }
        }
        const resultado = [];
        let x = 0;
        let hasNext = true;
    
        while (hasNext) {
            hasNext = false;
            for (const grupo in groupList) {
                if (groupList[grupo][x]) {
                    resultado.push(groupList[grupo][x]);
                    hasNext = true;
                }
            }
            x++;
        }
        for (const matches of resultado) {
            const payload = {
              id_player_1: matches.id_player_1,
              player_1_name: matches.player_1,
              id_player_2: matches.id_player_2,
              player_2_name: matches.player_2,
            };
          
            await this.playerRepository.setConfrontation(payload);
          }
        return groupList;
   }
}