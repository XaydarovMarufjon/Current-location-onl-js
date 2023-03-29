/*
  Warnings:

  - You are about to drop the column `neighborhoodId` on the `District` table. All the data in the column will be lost.
  - Added the required column `regionId` to the `District` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "District" DROP CONSTRAINT "District_neighborhoodId_fkey";

-- AlterTable
ALTER TABLE "District" DROP COLUMN "neighborhoodId",
ADD COLUMN     "regionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
