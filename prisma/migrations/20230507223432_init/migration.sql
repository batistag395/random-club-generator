-- CreateTable
CREATE TABLE "player" (
    "id" TEXT NOT NULL,
    "player_name" VARCHAR(255) NOT NULL,
    "team_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team" (
    "id" TEXT NOT NULL,
    "team_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("id")
);
