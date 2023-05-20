import { player } from '@prisma/client';

export class Player implements player {
  id?: string;
  player_name: string;
  team_name?: string;
}
