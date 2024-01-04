/*
  Warnings:

  - You are about to drop the column `tie` on the `scoreboard` table. All the data in the column will be lost.
  - Added the required column `draw` to the `scoreboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "scoreboard" DROP COLUMN "tie",
ADD COLUMN     "draw" VARCHAR(255) NOT NULL;
