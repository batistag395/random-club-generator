import { set_confrontation } from "@prisma/client";

export class SetConfrontation implements set_confrontation {
    id: string;
    id_player_1: string;
    player_1_name: string;
    id_player_2: string;
    player_2_name: string;
    winner: string;
    played: boolean;
    group_stage: boolean;
    play_offs: boolean;
}