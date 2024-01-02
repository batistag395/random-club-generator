import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamRepository } from './repositories/team.repository';
import { GetTeamsUseCase, InsertTeamUseCase } from './use-cases';
import { GetTeamsController, InsertTeamController } from './controllers';

@Module({
  controllers: [GetTeamsController, InsertTeamController],
  providers: [GetTeamsUseCase, InsertTeamUseCase, PrismaService, TeamRepository],
})
export class TeamsModule {}
