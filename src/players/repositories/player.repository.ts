import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDto, randomSelector } from '../dto/create-player.dto';
import { Player } from '../entities/player.entity';
import { UpdatePlayerDto } from '../dto/update-player.dto';

@Injectable()
export class PlayerRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.prisma.player.create({
      data: createPlayerDto,
    });
  }

  async findGroupNumber(): Promise<number[]>{
    const players = await this.prisma.player.findMany();
    if (!players) {
      return [];
    }
    const group_list = []
    for(const i of players){
     
      group_list.push(i.group)
    }
    const arraySemDuplicados = group_list.filter((valor, indice, self) => {
      return self.indexOf(valor) === indice;
    });
    return arraySemDuplicados.sort();
  }

  async findAll(): Promise<Player[]> {
    const players = await this.prisma.player.findMany();
    if (!players) {
      return [];
    }
    return players;
  }

  async findByGroup(group_number:string):Promise<Player[]>{
    const group_list = []
    const group = await this.prisma.player.findMany({
      where:{
        group: group_number,
      }
    })
    for(const i of group){
      let payload = {
        player: i.player_name,
        team_name: i.team_name
      }
      group_list.push(payload)
    }
    return group_list.sort();
  }
  async findOne(id: string) {
    return this.prisma.player.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: string, updatePlayerDto: randomSelector): Promise<Player> {
    return this.prisma.player.update({
      where: {
        id,
      },
      data: updatePlayerDto,
    });
  }
  async remove(id: string): Promise<Player> {
    return this.prisma.player.delete({
      where: {
        id,
      },
    });
  }
}
