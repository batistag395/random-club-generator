import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { TeamRepository } from '../repositories/team.repository';

@Injectable()
export class TeamsService {
  constructor(private readonly prisma: TeamRepository) {}

  async create(createTeamDto: CreateTeamDto) {
    return await this.prisma.create(createTeamDto);
  }

  async findAll() {
    return await this.prisma.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, _updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
