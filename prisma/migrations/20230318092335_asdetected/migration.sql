/*
  Warnings:

  - You are about to drop the column `name` on the `AsDetected` table. All the data in the column will be lost.
  - Added the required column `names` to the `AsDetected` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AsDetected" DROP COLUMN "name",
ADD COLUMN     "names" TEXT NOT NULL;
