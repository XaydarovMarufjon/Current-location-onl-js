-- CreateTable
CREATE TABLE "typeIncidents" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vector" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "typeIncidents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "typeIncidents_name_key" ON "typeIncidents"("name");

-- CreateIndex
CREATE UNIQUE INDEX "typeIncidents_code_key" ON "typeIncidents"("code");
