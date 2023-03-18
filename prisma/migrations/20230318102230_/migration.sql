/*
  Warnings:

  - Added the required column `nameuz` to the `ImpactObject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImpactObject" ADD COLUMN     "nameuz" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TypeComponents" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeComponents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeComponents_code_key" ON "TypeComponents"("code");
