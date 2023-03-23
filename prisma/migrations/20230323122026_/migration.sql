/*
  Warnings:

  - A unique constraint covering the columns `[domainSupport]` on the table `AttackedDomain` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AttackedDomain_domainSupport_key" ON "AttackedDomain"("domainSupport");
