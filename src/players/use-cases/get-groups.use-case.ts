import { BadRequestException, Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";

@Injectable()
export class GetGroupsUseCase{
    constructor(private readonly playerRepository: PlayerRepository){}

    async execute(){
        const player = await this.playerRepository.findAll();
        const groupNumber = await this.playerRepository.findGroupNumber()
        console.log(groupNumber.length)
        if(groupNumber.length  === 0){
          throw new BadRequestException('Os grupos ainda não foram definidos.')
        }
        const groupList = {}
       for(var i = 1; i <= groupNumber.length; i++){
         const players = player.filter((item) => 
           +item.group ===  i
         )
         for(var j = 0; j < players.length; j++){
           if(!(`group_${i}` in groupList)){
            groupList[`group_${i}`] = []
           }
           groupList[`group_${i}`].push(players[j])
         }
         
        }
        return groupList;
    }
}