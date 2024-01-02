import { Controller, Get, Param } from "@nestjs/common";
import { SetGroupsUseCase } from "../use-cases";

@Controller('players')

export class SetGroupsController{
    constructor(private readonly useCase: SetGroupsUseCase){}

    @Get('set-groups/:number_of_groups')
    async execute(@Param('number_of_groups') number_of_groups?: string){
        await this.useCase.execute(number_of_groups)
    }
}