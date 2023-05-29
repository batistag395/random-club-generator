import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
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
  @Get('set-groups')
  async whoAgainstWho(){
    const player = await this.playerUseCase.findAll();

    for (let i = player.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [player[i], player[j]] = [player[j], player[i]];
    }    
    const group_1 = [];
    const group_2 = [];
    const group_3 = [];

    let count = 0;
    let grou_number;
    const qtd = Object.keys(player).length;
    for(const i of await player){
      let payload = {
        group: "",
      }
      if(i.group === null){
        if(count < Math.round(qtd/3)){
          group_1.push(i.player_name)
          payload = {
            group: "1",
          }
          this.playerUseCase.update(player[count].id, payload)
          count++
        }else if(count < Math.round((qtd/3 )* 2)){
          payload = {
            group: "2",
          }
          group_2.push(i.player_name);
          this.playerUseCase.update(player[count].id, payload)
          count++
        }else if(count < qtd){
          payload = {
            group: "3",
          }
          group_3.push(i.player_name)
          this.playerUseCase.update(player[count].id, payload)
          count++
        }
      }
      else{
        throw new BadRequestException(`Os grupos ja foram definidos`)
      }
    }
    return {
      group_1, group_2, group_3
    }
  } 
  @Get('groups')
 async findGroups(){
  const group_1 =  await this.playerUseCase.findGroups('1');
  const group_2 =  await this.playerUseCase.findGroups('2');
  const group_3 =  await this.playerUseCase.findGroups('3');
  return {
    group_1,
    group_2,
    group_3
  }
 }
  
  @Get()
  async findAll() {
    const player = await this.playerUseCase.findAll();

    for (let i = player.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [player[i], player[j]] = [player[j], player[i]];
    }
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
}
