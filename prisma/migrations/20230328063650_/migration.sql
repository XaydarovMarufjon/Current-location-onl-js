/*
  Warnings:

  - Added the required column `macroRegionId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `districtId` to the `District` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhoodId` to the `Neighborhood` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regionId` to the `Region` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "macroRegionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "countryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "District" ADD COLUMN     "districtId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Neighborhood" ADD COLUMN     "neighborhoodId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "regionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "MacroRegional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Neighborhood" ADD CONSTRAINT "Neighborhood_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_macroRegionId_fkey" FOREIGN KEY ("macroRegionId") REFERENCES "MacroRegional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
