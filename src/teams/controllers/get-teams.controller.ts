import { Controller, Get } from "@nestjs/common";
import { GetTeamsUseCase } from "../use-cases";

@Controller('teams')

export class GetTeamsController {
    constructor(private readonly useCase: GetTeamsUseCase){}

    @Get()
    async execute(){
        return this.useCase.execute()
    }
}