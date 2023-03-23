/*
  Warnings:

  - You are about to drop the `ConfidentialityModule` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ConfidentialityModule";

-- CreateTable
CREATE TABLE "Confidentiality" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Confidentiality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Confidentiality_code_key" ON "Confidentiality"("code");
