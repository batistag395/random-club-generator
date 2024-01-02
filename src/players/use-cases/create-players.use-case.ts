import { Injectable } from "@nestjs/common";
import { PlayerRepository } from "../repositories/player.repository";
import { CreateMultiplePlayerDto } from "../dto/create-player.dto";

@Injectable()
export class CreatePlayerUseCase{
    constructor(private readonly prisma: PlayerRepository){}

    async execute(create: CreateMultiplePlayerDto){
        for (const i of create.player_name) {
            const payload = {
              player_name: i,
            };
            await this.prisma.create(payload)
        }
    }
}