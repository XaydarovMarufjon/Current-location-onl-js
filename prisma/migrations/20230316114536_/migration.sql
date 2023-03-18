/*
  Warnings:

  - You are about to drop the `ServiceSUE` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ServiceSUE";

-- CreateTable
CREATE TABLE "ServiceSue" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceSue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSue_name_key" ON "ServiceSue"("name");
