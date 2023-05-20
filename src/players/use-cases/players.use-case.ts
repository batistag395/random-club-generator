import { PlayerRepository } from '../repositories/player.repository';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayersUseCase {
  constructor(private readonly prisma: PlayerRepository) {}
  async create(createPlayer: CreatePlayerDto) {
    return await this.prisma.create(createPlayer);
  }
  async findAll() {
    return await this.prisma.findAll();
  }
}
