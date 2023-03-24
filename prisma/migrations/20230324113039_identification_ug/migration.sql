-- CreateTable
CREATE TABLE "IdentificationUG" (
    "id" TEXT NOT NULL,
    "identifierUBI" TEXT NOT NULL,
    "nameUBI" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IdentificationUG_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IdentificationUG_identifierUBI_key" ON "IdentificationUG"("identifierUBI");
