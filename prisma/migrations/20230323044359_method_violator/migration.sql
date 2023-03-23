-- CreateTable
CREATE TABLE "MethodViolator" (
    "id" TEXT NOT NULL,
    "techniqueCode" TEXT NOT NULL,
    "nameTechnique" TEXT NOT NULL,
    "MITRECode" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MethodViolator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MethodViolator_techniqueCode_key" ON "MethodViolator"("techniqueCode");

-- CreateIndex
CREATE UNIQUE INDEX "MethodViolator_MITRECode_key" ON "MethodViolator"("MITRECode");
