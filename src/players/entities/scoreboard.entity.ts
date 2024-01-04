import { scoreboard } from "@prisma/client";

export class Scoreboard implements scoreboard {
    id: string;
    id_player?: string;
    player_name?: string;
    team_name?: string;
    matches?: string;
    score?: string;
    win?: string;
    draw?: string;
    loss?: string;
    goals_scored?: string;
    goals_conceded?: string;
    goals_difference?: string;
}