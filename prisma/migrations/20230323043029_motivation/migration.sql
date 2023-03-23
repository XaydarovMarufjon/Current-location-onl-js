-- AlterTable
ALTER TABLE "AboutMeans" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AsDetected" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AttackedDomain" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AttackedDomainEmail" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "AttackedDomainUri" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "DetectedStatus" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "GroupComponents" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "HarmfulDomain" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "HarmfulDomainEmail" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "HarmfulDomainUri" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ImpactComponent" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ImpactObject" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MarkLimit" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SeverityLevel" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SortForce" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SortGravity" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TypeComponents" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Vulnerability" ALTER COLUMN "removerId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Motivation" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "hackerGroups" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Motivation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Motivation_code_key" ON "Motivation"("code");
