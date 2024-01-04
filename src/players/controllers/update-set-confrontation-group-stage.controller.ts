import { Body, Controller, Patch } from "@nestjs/common";
import { UpdateSetConfrontationGroupStageUseCase } from "../use-cases";
import { UpdateConfrontationDto } from "../dto/create-player.dto";

@Controller('players')
export class UpdateSetConfrontationGroupStageController {
    constructor(
        private readonly useCase: UpdateSetConfrontationGroupStageUseCase
    ){}

    @Patch('update-confrontation')
    async execute(@Body() data: UpdateConfrontationDto){
        await this.useCase.execute(data.id, data.goals_player_1, data.goals_player_2)
    }
}