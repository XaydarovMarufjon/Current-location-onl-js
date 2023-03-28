/*
  Warnings:

  - You are about to drop the column `stateName` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `regionName` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Region` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Region_regionName_key";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "stateName",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "regionName",
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "City";

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "District_name_key" ON "District"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");
