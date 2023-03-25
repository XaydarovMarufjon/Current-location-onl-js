-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "DigitalCode" TEXT NOT NULL,
    "stateName" TEXT NOT NULL,
    "LetterCountryCode" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_DigitalCode_key" ON "Country"("DigitalCode");
