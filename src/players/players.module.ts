import { Module } from '@nestjs/common';
import { PlayersUseCase } from './use-cases/players.use-case';
import { PlayersController } from './controllers/players.controller';
import { PlayerRepository } from './repositories/player.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamsService } from 'src/teams/use-cases/teams.use-case';
import { TeamRepository } from 'src/teams/repositories/team.repository';

@Module({
  controllers: [PlayersController],
  providers: [PlayersUseCase, PlayerRepository, PrismaService, TeamsService, TeamRepository],
})
export class PlayersModule {}
