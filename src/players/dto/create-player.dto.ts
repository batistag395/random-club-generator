import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

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

export class scoreboardDto {
  @IsString()
  id?: string;

  @IsString()
  id_player: string;

  @IsString()
  player_name?: string;

  @IsString()
  team_name?: string;

  @IsString()
  score?: string;

  @IsString()
  matches?: string;

  @IsString()
  win?: string;

  @IsString()
  draw?: string;

  @IsString()
  loss?: string;

  @IsString()
  goals_scored?: string;

  @IsString()
  goals_conceded?: string;

  @IsString()
  goals_difference?: string;
}

export class setConfrontationDto {
  @IsString()
  id?: string;

  @IsString()
  id_player_1: string;

  @IsString()
  player_1_name: string;

  @IsString()
  id_player_2: string;

  @IsString()
  player_2_name: string;

  @IsString()
  winner?: string;

  @IsBoolean()
  played?: boolean;
  @IsBoolean()
  group_stage?: boolean;
  @IsBoolean()
  play_offs?: boolean;
}

export class UpdateConfrontationDto {
  @IsString()
  id: string;

  @IsString()
  goals_player_1: string;
  
  @IsString()
  goals_player_2: string;
}