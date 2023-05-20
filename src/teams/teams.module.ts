import { Module } from '@nestjs/common';
import { TeamsService } from './use-cases/teams.use-case';
import { TeamsController } from './controllers/teams.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamRepository } from './repositories/team.repository';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService, PrismaService, TeamRepository],
})
export class TeamsModule {}
