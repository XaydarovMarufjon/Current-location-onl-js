/*
  Warnings:

  - You are about to drop the column `countryId` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `districtId` on the `District` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhoodId` on the `Neighborhood` table. All the data in the column will be lost.
  - You are about to drop the column `regionId` on the `Region` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_countryId_fkey";

-- DropForeignKey
ALTER TABLE "District" DROP CONSTRAINT "District_districtId_fkey";

-- DropForeignKey
ALTER TABLE "Neighborhood" DROP CONSTRAINT "Neighborhood_neighborhoodId_fkey";

-- DropForeignKey
ALTER TABLE "Region" DROP CONSTRAINT "Region_regionId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "countryId";

-- AlterTable
ALTER TABLE "District" DROP COLUMN "districtId";

-- AlterTable
ALTER TABLE "Neighborhood" DROP COLUMN "neighborhoodId";

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "regionId";
