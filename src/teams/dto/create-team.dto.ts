import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @IsNotEmpty()
  team_name: string;
}
export class CreateMultipleTeamDto {
  @IsString()
  @IsNotEmpty()
  team_name?: string[];
}
