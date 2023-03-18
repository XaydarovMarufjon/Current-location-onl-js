-- CreateTable
CREATE TABLE "AttackedDomainUri" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "organizationWebsite" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttackedDomainUri_pkey" PRIMARY KEY ("id")
);
