import { Module } from '@nestjs/common';
import { PlayersUseCase } from './use-cases/players.use-case';
import { PlayersController } from './controllers/players.controller';
import { PlayerRepository } from './repositories/player.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PlayersController],
  providers: [PlayersUseCase, PlayerRepository, PrismaService],
})
export class PlayersModule {}
