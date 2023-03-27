/*
  Warnings:

  - You are about to drop the column `regionName` on the `City` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cityName]` on the table `City` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cityName` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "City_regionName_key";

-- AlterTable
ALTER TABLE "City" DROP COLUMN "regionName",
ADD COLUMN     "cityName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "City_cityName_key" ON "City"("cityName");
