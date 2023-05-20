import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { PrismaService } from './prisma/prisma.service';
import { TeamsService } from './teams/use-cases/teams.use-case';
import { TeamRepository } from './teams/repositories/team.repository';
import { PlayerRepository } from './players/repositories/player.repository';
import { PlayersUseCase } from './players/use-cases/players.use-case';

@Module({
  imports: [PlayersModule, TeamsModule],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    TeamsService,
    TeamRepository,
    PlayerRepository,
    PlayersUseCase,
  ],
})
export class AppModule {}
