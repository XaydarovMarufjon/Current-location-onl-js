-- CreateTable
CREATE TABLE "TypicalThreatModule" (
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

    CONSTRAINT "TypicalThreatModule_pkey" PRIMARY KEY ("id")
);
