-- CreateTable
CREATE TABLE "TypeComputer" (
    "id" TEXT NOT NULL,
    "incidentTypes" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vector" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeComputer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TypeComputer_code_key" ON "TypeComputer"("code");
