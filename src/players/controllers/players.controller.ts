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

  @Get('select-club')
  async select_club() {
    const player = await this.playerUseCase.findAll();

    for (let i = player.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [player[i], player[j]] = [player[j], player[i]];
    }

    const team = await this.teamUseCase.findAll();

    for (let i = player.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [player[i], player[j]] = [player[j], player[i]];
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
          throw new BadRequestException('Todos os jogadores estao com equipe atribuidas.')
        }
        count++
      }
      return player
    }
  }
}
