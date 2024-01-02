import { Controller, Get } from "@nestjs/common";
import { SetClubsRandomWayUseCase } from "../use-cases";

@Controller('players')

export class SetClubsRandomWayController {
    constructor(private readonly useCase: SetClubsRandomWayUseCase){}
    
    @Get('set-clubs-random-way')
    async execute(){
        await this.useCase.execute()
    }
}