import { Controller, Get } from "@nestjs/common";
import { GetConfrontationUseCase } from "../use-cases";

@Controller('players')

export class GetConfrontationController {
    constructor(
        private readonly useCase: GetConfrontationUseCase
    ){}
    @Get('get-confrontation')
    async execute(){
        return this.useCase.execute()
    }
}