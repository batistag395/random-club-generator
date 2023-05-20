/* eslint-disable prettier/prettier */
import { PrismaService } from 'src/prisma/prisma.service';
import { Team } from '../entities/team.entity';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    return this.prisma.team.create({
      data: createTeamDto,
    });
  }

  async findAll(): Promise<Team[]> {
    const teams = await this.prisma.team.findMany();
    if(!teams){
      return []
    }
    return await teams
  }

  async findOne(id: string) {
    return this.prisma.team.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: string, updateCoinDto: UpdateTeamDto): Promise<Team> {
    return this.prisma.team.update({
      where: {
        id,
      },
      data: updateCoinDto,
    });
  }
  async remove(id: string): Promise<Team> {
    return this.prisma.team.delete({
      where: {
        id,
      },
    });
  }
}
