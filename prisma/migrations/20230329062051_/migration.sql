/*
  Warnings:

  - You are about to drop the column `flatId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `homeId` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `houseId` on the `Address` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flatNum` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `homeNum` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `houseNum` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhoodId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regionId` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "flatId",
DROP COLUMN "homeId",
DROP COLUMN "houseId",
ADD COLUMN     "countryId" TEXT NOT NULL,
ADD COLUMN     "flatNum" INTEGER NOT NULL,
ADD COLUMN     "homeNum" TEXT NOT NULL,
ADD COLUMN     "houseNum" TEXT NOT NULL,
ADD COLUMN     "neighborhoodId" TEXT NOT NULL,
ADD COLUMN     "regionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "Neighborhood"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
