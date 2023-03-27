/*
  Warnings:

  - Added the required column `countryId` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "countryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "regionName" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_regionName_key" ON "Region"("regionName");

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "MacroRegional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
