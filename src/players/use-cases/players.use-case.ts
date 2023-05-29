import { PlayerRepository } from '../repositories/player.repository';
import { CreatePlayerDto, randomSelector } from '../dto/create-player.dto';
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
  async findGroups(group_number:string){
    return this,this.prisma.findByGroup(group_number);
  }
  async update(id: string, data: randomSelector){
    return this.prisma.update(id, data)
  }
}
