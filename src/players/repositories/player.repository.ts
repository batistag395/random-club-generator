import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlayerDto, randomSelector, scoreboardDto, setConfrontationDto } from '../dto/create-player.dto';
import { Player } from '../entities/player.entity';
import { UpdatePlayerDto } from '../dto/update-player.dto';
import { scoreboard } from '@prisma/client';
import { Scoreboard } from '../entities/scoreboard.entity';
import { SetConfrontation } from '../entities/set-confrontation.entity';

@Injectable()
export class PlayerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.prisma.player.create({
      data: createPlayerDto,
    });
  }

  async findGroupNumber(): Promise<any>{
    const players = await this.prisma.player.findMany();
    if (!players) {
      return [];
    }
    const group_list = []
    for(const i of players){
     if(!(i.group === null)){
       group_list.push(i.group)
     }
    }
    
    const arraySemDuplicados = group_list.filter((valor, indice, self) => {
      return self.indexOf(valor) === indice;
    });
    return arraySemDuplicados.sort();
  }

  async findAll(): Promise<Player[]> {
    const players = await this.prisma.player.findMany();
    if (!players) {
      return [];
    }
    return players;
  }

  async findByGroup(group_number:string):Promise<Player[]>{
    const group_list = []
    const group = await this.prisma.player.findMany({
      where:{
        group: group_number,
      }
    })
    for(const i of group){
      let payload = {
        player: i.player_name,
        team_name: i.team_name
      }
      group_list.push(payload)
    }
    return group_list.sort();
  }
  async findOne(id: string) {
    return this.prisma.player.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: string, updatePlayerDto: randomSelector): Promise<Player> {
    return this.prisma.player.update({
      where: {
        id,
      },
      data: updatePlayerDto,
    });
  }
  async remove(id: string): Promise<Player> {
    return this.prisma.player.delete({
      where: {
        id,
      },
    });
  }
  async setConfrontation( data: setConfrontationDto): Promise<void>{
    await this.prisma.set_confrontation.create({data: data})
  }
  async getConfrontation(): Promise<SetConfrontation[]>{
    return this.prisma.set_confrontation.findMany()
  }
  async getConfrontationById(id: string): Promise<SetConfrontation>{
    return this.prisma.set_confrontation.findUnique({where: {id}})
  }
  async updateConfrontation(id: string, winner_player_id: string, status: boolean): Promise<void>{
    await this.prisma.set_confrontation.update({
      where: {
        id: id,
      },
      data: {
        winner: winner_player_id,
        played: status,
      }
  })
 }
  async insertScoreboard(data: scoreboardDto): Promise<void>{
    await this.prisma.scoreboard.create({
      data: {
        id_player: data.id_player,
        player_name: data.player_name,
        team_name: data.team_name,
        matches: '0',
        score: '0',
        win:'0',
        draw:'0',
        loss:'0',
        goals_scored:'0',
        goals_conceded:'0',
        goals_difference:'0',
      }
    })
  }
  async getScoreboard(group: string): Promise<Scoreboard>{
    const scores = await this.prisma.scoreboard.findMany({

    })
    return ;
  }

  async updateScoreboard(data: scoreboardDto): Promise<void>{
    await this.prisma.scoreboard.update({
      where: {
        id: data.id_player,
      },
      data: {
        score: data.score,
        win: data.win,
        draw: data.draw,
        loss: data.loss,
        goals_scored: data.goals_scored,
        goals_conceded: data.goals_conceded,
        goals_difference: data.goals_difference
      }
    })
  }
}
