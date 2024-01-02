import { Body, Controller, Post } from "@nestjs/common";
import { CreateMultipleTeamDto } from "../dto/create-team.dto";
import { InsertTeamUseCase } from "../use-cases";

@Controller('teams')

export class InsertTeamController {
    constructor(private readonly useCase: InsertTeamUseCase){}

    @Post('insert-teams')
    async execute(@Body() create: CreateMultipleTeamDto){
        await this.useCase.execute(create)
    }
}