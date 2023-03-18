-- CreateTable
CREATE TABLE "HarmfulDomain" (
    "id" TEXT NOT NULL,
    "hosting" TEXT NOT NULL,
    "domainSupport" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HarmfulDomain_pkey" PRIMARY KEY ("id")
);
