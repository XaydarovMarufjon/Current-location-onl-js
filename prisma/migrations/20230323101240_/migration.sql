-- AlterTable
ALTER TABLE "ServiceSue" ALTER COLUMN "removerId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TypeComputer" ALTER COLUMN "creatorId" DROP NOT NULL,
ALTER COLUMN "editorId" DROP NOT NULL,
ALTER COLUMN "removerId" DROP NOT NULL;
