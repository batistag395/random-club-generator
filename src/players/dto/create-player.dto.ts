import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  player_name: string;
  @IsString()
  team_name?: string;
}
export class CreateMultiplePlayerDto {
  @IsString()
  @IsNotEmpty()
  player_name?: string[];
  @IsString()
  team_name?: string;
}

export class randomSelector {
  @IsString()
  team_name?: string;
  @IsString()
  group?: string;
}
