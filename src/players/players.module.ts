import { Module } from '@nestjs/common';
import { PlayerRepository } from './repositories/player.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamRepository } from 'src/teams/repositories/team.repository';
import { CreatePlayerUseCase, GetConfrontationUseCase, GetGroupsUseCase, GetPlayersUseCase, SetClubsRandomWayUseCase, SetConfrontationGroupStageUseCase, SetGroupsUseCase, UpdateScoreboardUseCase, UpdateSetConfrontationGroupStageUseCase } from './use-cases';
import { GetConfrontationController, GetGroupsController, GetPlayersController, InsertPlayersController, SetClubsRandomWayController, SetConfrontationGroupStageController, SetGroupsController, UpdateSetConfrontationGroupStageController } from './controllers';
import { GetTeamsUseCase, InsertTeamUseCase } from 'src/teams/use-cases';

@Module({
  controllers: [
    GetGroupsController,
    GetPlayersController,
    InsertPlayersController,
    SetClubsRandomWayController,
    SetConfrontationGroupStageController,
    SetGroupsController,
    UpdateSetConfrontationGroupStageController,
    GetConfrontationController
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
    SetGroupsUseCase,
    UpdateSetConfrontationGroupStageUseCase,
    GetConfrontationUseCase,
    UpdateScoreboardUseCase
  ],
})
export class PlayersModule {}
