/*
  Warnings:

  - You are about to drop the column `names` on the `AsDetected` table. All the data in the column will be lost.
  - You are about to drop the column `names` on the `DetectedStatus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AsDetected" DROP COLUMN "names";

-- AlterTable
ALTER TABLE "DetectedStatus" DROP COLUMN "names";
