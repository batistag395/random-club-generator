import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlayersUseCase } from '../use-cases/players.use-case';
import { CreateMultiplePlayerDto } from '../dto/create-player.dto';
import { TeamsService } from 'src/teams/use-cases/teams.use-case';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly playerUseCase: PlayersUseCase,
    private readonly teamUseCase: TeamsService,
    ) {}

  @Post('create')
  async create(@Body() createPlayerDto: CreateMultiplePlayerDto) {
    for (const i of createPlayerDto.player_name) {
      const payload = {
        player_name: i,
      };
      await this.playerUseCase.create(payload);
    }
  }
  @Get('set-groups/:number_of_groups')
  async whoAgainstWho(@Param('number_of_groups') number_of_groups?: string){
    const player = await this.playerUseCase.findAll();

    for (let i = player.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
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
          this.playerUseCase.update(player[players].id, payload)
          players++
          count++
        }
      }else{
        throw new BadRequestException('Os grupos ja foram definidos!')
      }
    }
  } 
  @Get('groups')
 async findGroups(){
  const player = await this.playerUseCase.findAll();
  const groupNumber = await this.playerUseCase.findGroupNumber()

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
     console.log(players.length)
   }
   
  }
  return groupList;
 }
  
  @Get()
  async findAll() {
    const player = await this.playerUseCase.findAll();
   
    return player;
  }

  @Get('set-clubs')
  async select_club() {
    const player = await this.playerUseCase.findAll();

    for (let i = player.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [player[i], player[j]] = [player[j], player[i]];
    }

    const team = await this.teamUseCase.findAll();

    for (let i = team.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [team[i], team[j]] = [team[j], team[i]];
    }
    if(player){
      let count = 0
      for(const i of team){
        const payload = {
          team_name: i.team_name,
        }
        if(player[count].team_name === null){
          await this.playerUseCase.update(player[count].id, payload)
        }else{
          throw new BadRequestException('Todos os jogadores estao com equipes atribuidas.')
        }
        count++
      }
      return player;
    }
  }
   @Get('set-confrontation-group-stage')
   async set_confrontation(){
    const player = await this.playerUseCase.findAll();
    const groupNumber = await this.playerUseCase.findGroupNumber()
  
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
        player_1: players[k].player_name,
        player_2:  players[j].player_name,
      })
      groupList[`group_${i}`].push({
        player_1:  players[j].player_name,
        player_2: players[k].player_name,
      })
    }
   }
  }
  return groupList;
}
}
