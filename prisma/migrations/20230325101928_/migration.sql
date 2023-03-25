/*
  Warnings:

  - You are about to drop the column `DigitalCode` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `LetterCountryCode` on the `Country` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[digitalCode]` on the table `Country` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `digitalCode` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letterCountryCode` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Country_DigitalCode_key";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "DigitalCode",
DROP COLUMN "LetterCountryCode",
ADD COLUMN     "digitalCode" TEXT NOT NULL,
ADD COLUMN     "letterCountryCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Country_digitalCode_key" ON "Country"("digitalCode");
