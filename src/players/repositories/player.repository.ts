import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDto } from '../dto/create-player.dto';
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

  async findAll(): Promise<Player[]> {
    const players = await this.prisma.player.findMany();
    if (!players) {
      return [];
    }
    return await players;
  }

  async findOne(id: string) {
    return this.prisma.player.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
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
