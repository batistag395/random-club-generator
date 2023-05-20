import { team } from '@prisma/client';

export class Team implements team {
  id: string;
  team_name: string;
}
