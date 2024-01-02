import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { PrismaService } from './prisma/prisma.service';
import { TeamRepository } from './teams/repositories/team.repository';
import { PlayerRepository } from './players/repositories/player.repository';
import { CreatePlayerUseCase, GetGroupsUseCase, GetPlayersUseCase, SetClubsRandomWayUseCase, SetConfrontationGroupStageUseCase, SetGroupsUseCase } from './players/use-cases';
import { GetTeamsUseCase, InsertTeamUseCase } from './teams/use-cases';

@Module({
  imports: [PlayersModule, TeamsModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    GetTeamsUseCase, 
    InsertTeamUseCase,
    TeamRepository,
    PlayerRepository,
    CreatePlayerUseCase,
    GetGroupsUseCase,
    GetPlayersUseCase,
    SetClubsRandomWayUseCase,
    SetConfrontationGroupStageUseCase,
    SetGroupsUseCase
  ],
})
export class AppModule {}
