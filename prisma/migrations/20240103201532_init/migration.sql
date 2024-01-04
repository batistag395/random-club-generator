/*
  Warnings:

  - You are about to drop the column `Score` on the `scoreboard` table. All the data in the column will be lost.
  - You are about to drop the column `draw` on the `scoreboard` table. All the data in the column will be lost.
  - You are about to drop the column `game_played` on the `scoreboard` table. All the data in the column will be lost.
  - Added the required column `matches` to the `scoreboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `scoreboard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tie` to the `scoreboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "scoreboard" DROP COLUMN "Score",
DROP COLUMN "draw",
DROP COLUMN "game_played",
ADD COLUMN     "matches" VARCHAR(255) NOT NULL,
ADD COLUMN     "score" VARCHAR(255) NOT NULL,
ADD COLUMN     "tie" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "set_confrontation" ADD COLUMN     "group_stage" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "play_offs" BOOLEAN NOT NULL DEFAULT false;
