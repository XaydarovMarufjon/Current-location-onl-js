/*
  Warnings:

  - You are about to drop the column `geoRegions` on the `GeographicalRegion` table. All the data in the column will be lost.
  - You are about to drop the column `macroRegion` on the `MacroRegional` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `districtId` to the `District` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `GeographicalRegion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `MacroRegional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhoodId` to the `Neighborhood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regionId` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "countryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "District" ADD COLUMN     "districtId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "GeographicalRegion" DROP COLUMN "geoRegions",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MacroRegional" DROP COLUMN "macroRegion",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Neighborhood" ADD COLUMN     "neighborhoodId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "regionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "houseId" INTEGER NOT NULL,
    "flatId" INTEGER NOT NULL,
    "homeId" INTEGER NOT NULL,
    "postCode" INTEGER NOT NULL,
    "geoLocation" TEXT NOT NULL,
    "moreInfo" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "MacroRegional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Neighborhood" ADD CONSTRAINT "Neighborhood_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
