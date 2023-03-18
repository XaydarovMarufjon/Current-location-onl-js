/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `AttackedDomainEmail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `AttackedDomainUri` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `HarmfulDomainEmail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `HarmfulDomainUri` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Vulnerability` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "ImpactObject" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "objectsInfluence" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImpactObject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImpactObject_code_key" ON "ImpactObject"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AttackedDomainEmail_code_key" ON "AttackedDomainEmail"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AttackedDomainUri_code_key" ON "AttackedDomainUri"("code");

-- CreateIndex
CREATE UNIQUE INDEX "HarmfulDomainEmail_code_key" ON "HarmfulDomainEmail"("code");

-- CreateIndex
CREATE UNIQUE INDEX "HarmfulDomainUri_code_key" ON "HarmfulDomainUri"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Vulnerability_code_key" ON "Vulnerability"("code");
