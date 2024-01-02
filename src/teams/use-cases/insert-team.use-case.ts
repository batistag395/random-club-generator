import { BadRequestException, Injectable } from "@nestjs/common";
import { TeamRepository } from "../repositories/team.repository";
import { CreateMultipleTeamDto } from "../dto/create-team.dto";

@Injectable()
export class InsertTeamUseCase {
    constructor(private readonly repository: TeamRepository){}

    async execute(create: CreateMultipleTeamDto){
        if(create){
            for (const i of create.team_name) {
                const payload = {
                  team_name: i,
                };
                await this.repository.create(payload);
            }
        }else{
            throw new BadRequestException('Algo deu errado.')
        }
    }
}