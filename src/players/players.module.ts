import { Module } from '@nestjs/common';
import { PlayerRepository } from './repositories/player.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamRepository } from 'src/teams/repositories/team.repository';
import { CreatePlayerUseCase, GetGroupsUseCase, GetPlayersUseCase, SetClubsRandomWayUseCase, SetConfrontationGroupStageUseCase, SetGroupsUseCase } from './use-cases';
import { GetGroupsController, GetPlayersController, InsertPlayersController, SetClubsRandomWayController, SetConfrontationGroupStageController, SetGroupsController } from './controllers';
import { GetTeamsUseCase, InsertTeamUseCase } from 'src/teams/use-cases';

@Module({
  controllers: [
    GetGroupsController,
    GetPlayersController,
    InsertPlayersController,
    SetClubsRandomWayController,
    SetConfrontationGroupStageController,
    SetGroupsController
],
  providers: [
    PlayerRepository, 
    PrismaService, 
    GetTeamsUseCase, 
    InsertTeamUseCase,
    TeamRepository,
    CreatePlayerUseCase,
    GetGroupsUseCase,
    GetPlayersUseCase,
    SetClubsRandomWayUseCase,
    SetConfrontationGroupStageUseCase,
    SetGroupsUseCase
  ],
})
export class PlayersModule {}
