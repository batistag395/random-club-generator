import { Body, Controller, Post } from "@nestjs/common"
import { CreatePlayerUseCase } from "../use-cases"
import { CreateMultiplePlayerDto } from "../dto/create-player.dto"

@Controller('players')

export class InsertPlayersController {
    constructor(private readonly useCase: CreatePlayerUseCase){}

    @Post('insert-players')
    async execute(@Body() insertPlayer: CreateMultiplePlayerDto){
        await this.useCase.execute(insertPlayer)
    }
}