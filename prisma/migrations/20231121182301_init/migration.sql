-- CreateTable
CREATE TABLE "set_confrontation" (
    "id" TEXT NOT NULL,
    "id_player_1" VARCHAR(255) NOT NULL,
    "player_1_name" VARCHAR(255) NOT NULL,
    "id_player_2" VARCHAR(255) NOT NULL,
    "player_2_name" VARCHAR(255) NOT NULL,
    "winner" VARCHAR(255),
    "played" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "set_confrontation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scoreboard" (
    "id" TEXT NOT NULL,
    "id_player" VARCHAR(255) NOT NULL,
    "player_name" VARCHAR(255) NOT NULL,
    "team_name" VARCHAR(255) NOT NULL,
    "Score" VARCHAR(255) NOT NULL,
    "game_played" VARCHAR(255) NOT NULL,
    "win" VARCHAR(255) NOT NULL,
    "draw" VARCHAR(255) NOT NULL,
    "loss" VARCHAR(255) NOT NULL,
    "goals_scored" VARCHAR(255) NOT NULL,
    "goals_conceded" VARCHAR(255) NOT NULL,
    "goals_difference" VARCHAR(255) NOT NULL,

    CONSTRAINT "scoreboard_pkey" PRIMARY KEY ("id")
);
