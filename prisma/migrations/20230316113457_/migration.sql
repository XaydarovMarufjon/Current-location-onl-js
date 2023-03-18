/*
  Warnings:

  - You are about to drop the `CyberIncident` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CyberIncident";

-- CreateTable
CREATE TABLE "ServiceSUE" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceSUE_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSUE_name_key" ON "ServiceSUE"("name");
