/*
  Warnings:

  - You are about to drop the column `nameHS` on the `ImpactUG` table. All the data in the column will be lost.
  - Added the required column `nameUG` to the `ImpactUG` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImpactUG" DROP COLUMN "nameHS",
ADD COLUMN     "nameUG" TEXT NOT NULL;
