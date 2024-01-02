import { Controller, Get } from "@nestjs/common";
import { GetPlayersUseCase } from "../use-cases";

@Controller('players')

export class GetPlayersController {
    constructor(private readonly useCase: GetPlayersUseCase){}
    
    @Get('get-players')
    async execute(){
        return this.useCase.execute()
    }
}