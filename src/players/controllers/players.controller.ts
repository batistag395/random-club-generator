import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayersUseCase } from '../use-cases/players.use-case';
import { CreateMultiplePlayerDto } from '../dto/create-player.dto';

@Controller('players')
export class PlayersController {
  constructor(private readonly useCase: PlayersUseCase) {}
  @Post('create')
  async create(@Body() createPlayerDto: CreateMultiplePlayerDto) {
    for (const i of createPlayerDto.player_name) {
      const payload = {
        player_name: i,
      };
      await this.useCase.create(payload);
    }
  }

  @Get()
  async findAll() {
    return await this.useCase.findAll();
  }
}
