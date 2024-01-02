import { Controller, Get } from "@nestjs/common";
import { GetGroupsUseCase } from "../use-cases";

@Controller('players')

export class GetGroupsController {
    constructor(private readonly useCase: GetGroupsUseCase){}

    @Get('get-groups')
    async execute(){
        return this.useCase.execute()
    }
}