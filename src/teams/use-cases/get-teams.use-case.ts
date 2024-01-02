import { Injectable, NotFoundException } from "@nestjs/common";
import { TeamRepository } from "../repositories/team.repository";

@Injectable()

export class  GetTeamsUseCase {
    constructor(private readonly repository: TeamRepository){}

    async execute(){
        const teams =await this.repository.findAll()

        if(!(teams)){
            throw new NotFoundException('Nenhum time encontrado.')
        }
        return teams
    }
}