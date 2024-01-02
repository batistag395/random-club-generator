import { Controller, Get } from "@nestjs/common";
import { SetConfrontationGroupStageUseCase } from "../use-cases";

@Controller('players')

export class SetConfrontationGroupStageController{
    constructor(private readonly useCase: SetConfrontationGroupStageUseCase){}
    
    @Get('set-confrontation-group-stage')
    async execute(){
        return this.useCase.execute()
    }
}