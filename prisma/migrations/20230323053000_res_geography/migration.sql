-- CreateTable
CREATE TABLE "ResGeographyModule" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "geographicregions" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResGeographyModule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ResGeographyModule_code_key" ON "ResGeographyModule"("code");
