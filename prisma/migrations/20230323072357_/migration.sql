/*
  Warnings:

  - You are about to drop the `ResGeographyModule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ResGeographyModule";

-- CreateTable
CREATE TABLE "ResGeography" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "geographicregions" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResGeography_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResGeography_code_key" ON "ResGeography"("code");
