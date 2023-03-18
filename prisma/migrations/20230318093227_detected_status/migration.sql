/*
  Warnings:

  - Added the required column `name` to the `AsDetected` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AsDetected" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DetectedStatus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "names" TEXT NOT NULL,

    CONSTRAINT "DetectedStatus_pkey" PRIMARY KEY ("id")
);
