/*
  Warnings:

  - You are about to drop the `TypicalThreatModule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TypicalThreatModule";

-- CreateTable
CREATE TABLE "TypicalThreat" (
    "id" TEXT NOT NULL,
    "gangTools" TEXT NOT NULL,
    "toolType" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypicalThreat_pkey" PRIMARY KEY ("id")
);
