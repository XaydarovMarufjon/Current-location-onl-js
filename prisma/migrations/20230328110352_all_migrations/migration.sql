-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT,
    "nameru" TEXT,
    "listOrgId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subDepartments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT,
    "nameru" TEXT,
    "departmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subDepartments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "positions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT,
    "nameru" TEXT,
    "listOrgId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "typeIncidents" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vector" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "typeIncidents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listorgs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT,
    "nameru" TEXT,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "listorgs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "positionId" TEXT NOT NULL,
    "listOrgId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "subDepartmentId" TEXT,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HotLine" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HotLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceSue" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceSue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeComputer" (
    "id" TEXT NOT NULL,
    "incidentTypes" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vector" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeComputer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutMeans" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "toolDetails" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AboutMeans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeverityLevel" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "severityLevel" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SeverityLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SortForce" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "incidentSeverity" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SortForce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SortGravity" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "incidentSeverity" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT,
    "editorId" TEXT,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SortGravity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarkLimit" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "privacySymbol" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarkLimit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttackedDomain" (
    "id" TEXT NOT NULL,
    "hosting" TEXT NOT NULL,
    "domainSupport" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttackedDomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttackedDomainUri" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "organizationWebsite" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttackedDomainUri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttackedDomainEmail" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AttackedDomainEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HarmfulDomain" (
    "id" TEXT NOT NULL,
    "hosting" TEXT NOT NULL,
    "domainSupport" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HarmfulDomain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HarmfulDomainUri" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "organizationWebsite" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HarmfulDomainUri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HarmfulDomainEmail" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HarmfulDomainEmail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vulnerability" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "cellPhone" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vulnerability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AsDetected" (
    "id" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AsDetected_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetectedStatus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetectedStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactObject" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "objectsInfluence" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nameuz" TEXT NOT NULL,

    CONSTRAINT "ImpactObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeComponents" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypeComponents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupComponents" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nameGroup" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupComponents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactComponent" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "impactComponents" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImpactComponent_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "TacticsViolator" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "objectAttack" TEXT NOT NULL,
    "stages" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TacticsViolator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypicalThreat" (
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

    CONSTRAINT "TypicalThreat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ResGeography" (
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

    CONSTRAINT "ResGeography_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CurrentStatus" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nameStatus" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CurrentStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Confidentiality" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Confidentiality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DamageFactors" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DamageFactors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubjectDamage" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "damage" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubjectDamage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeName" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmployeeName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EditEmployeeName" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EditEmployeeName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdentifiedThreat" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "threatSource" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IdentifiedThreat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdentificationUG" (
    "id" TEXT NOT NULL,
    "identifierUBI" TEXT NOT NULL,
    "nameUBI" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IdentificationUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactUG" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nameUG" TEXT NOT NULL,

    CONSTRAINT "ImpactUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExactType" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "objectInfluence" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExactType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImplementUG" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImplementUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IdentifiedUG" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IdentifiedUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsequencesUG" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsequencesUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationUG" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EvaluationUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PresenceUG" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vulnerability" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PresenceUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorizationUG" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "vulnerability" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthorizationUG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Continent" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Continent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "digitalCode" TEXT NOT NULL,
    "letterCountryCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "continentId" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "neighborhoodId" TEXT NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Neighborhood" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameuz" TEXT NOT NULL,
    "nameru" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "districtId" TEXT NOT NULL,

    CONSTRAINT "Neighborhood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "houseId" INTEGER NOT NULL,
    "flatId" INTEGER NOT NULL,
    "homeId" INTEGER NOT NULL,
    "postCode" INTEGER NOT NULL,
    "geoLocation" TEXT NOT NULL,
    "moreInfo" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "editorId" TEXT NOT NULL,
    "removerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "continentId" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_userId_key" ON "employees"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_key" ON "departments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "subDepartments_name_key" ON "subDepartments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "typeIncidents_name_key" ON "typeIncidents"("name");

-- CreateIndex
CREATE UNIQUE INDEX "typeIncidents_code_key" ON "typeIncidents"("code");

-- CreateIndex
CREATE UNIQUE INDEX "HotLine_fullName_key" ON "HotLine"("fullName");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceSue_name_key" ON "ServiceSue"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TypeComputer_code_key" ON "TypeComputer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AboutMeans_code_key" ON "AboutMeans"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SeverityLevel_code_key" ON "SeverityLevel"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SortForce_code_key" ON "SortForce"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SortGravity_code_key" ON "SortGravity"("code");

-- CreateIndex
CREATE UNIQUE INDEX "MarkLimit_code_key" ON "MarkLimit"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AttackedDomain_domainSupport_key" ON "AttackedDomain"("domainSupport");

-- CreateIndex
CREATE UNIQUE INDEX "AttackedDomainUri_code_key" ON "AttackedDomainUri"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AttackedDomainEmail_code_key" ON "AttackedDomainEmail"("code");

-- CreateIndex
CREATE UNIQUE INDEX "HarmfulDomainUri_code_key" ON "HarmfulDomainUri"("code");

-- CreateIndex
CREATE UNIQUE INDEX "HarmfulDomainEmail_code_key" ON "HarmfulDomainEmail"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Vulnerability_code_key" ON "Vulnerability"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ImpactObject_code_key" ON "ImpactObject"("code");

-- CreateIndex
CREATE UNIQUE INDEX "TypeComponents_code_key" ON "TypeComponents"("code");

-- CreateIndex
CREATE UNIQUE INDEX "GroupComponents_code_key" ON "GroupComponents"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ImpactComponent_code_key" ON "ImpactComponent"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Motivation_code_key" ON "Motivation"("code");

-- CreateIndex
CREATE UNIQUE INDEX "MethodViolator_techniqueCode_key" ON "MethodViolator"("techniqueCode");

-- CreateIndex
CREATE UNIQUE INDEX "MethodViolator_MITRECode_key" ON "MethodViolator"("MITRECode");

-- CreateIndex
CREATE UNIQUE INDEX "TacticsViolator_code_key" ON "TacticsViolator"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ResGeography_code_key" ON "ResGeography"("code");

-- CreateIndex
CREATE UNIQUE INDEX "CurrentStatus_code_key" ON "CurrentStatus"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Confidentiality_code_key" ON "Confidentiality"("code");

-- CreateIndex
CREATE UNIQUE INDEX "DamageFactors_code_key" ON "DamageFactors"("code");

-- CreateIndex
CREATE UNIQUE INDEX "SubjectDamage_code_key" ON "SubjectDamage"("code");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeName_code_key" ON "EmployeeName"("code");

-- CreateIndex
CREATE UNIQUE INDEX "EditEmployeeName_code_key" ON "EditEmployeeName"("code");

-- CreateIndex
CREATE UNIQUE INDEX "IdentifiedThreat_code_key" ON "IdentifiedThreat"("code");

-- CreateIndex
CREATE UNIQUE INDEX "IdentificationUG_identifierUBI_key" ON "IdentificationUG"("identifierUBI");

-- CreateIndex
CREATE UNIQUE INDEX "ImpactUG_code_key" ON "ImpactUG"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ExactType_code_key" ON "ExactType"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ImplementUG_name_key" ON "ImplementUG"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ConsequencesUG_code_key" ON "ConsequencesUG"("code");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationUG_code_key" ON "EvaluationUG"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PresenceUG_code_key" ON "PresenceUG"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AuthorizationUG_code_key" ON "AuthorizationUG"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Continent_id_key" ON "Continent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Continent_code_key" ON "Continent"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Country_id_key" ON "Country"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "District_name_key" ON "District"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Neighborhood_name_key" ON "Neighborhood"("name");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_listOrgId_fkey" FOREIGN KEY ("listOrgId") REFERENCES "listorgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subDepartments" ADD CONSTRAINT "subDepartments_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "positions" ADD CONSTRAINT "positions_listOrgId_fkey" FOREIGN KEY ("listOrgId") REFERENCES "listorgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal" ADD CONSTRAINT "personal_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal" ADD CONSTRAINT "personal_listOrgId_fkey" FOREIGN KEY ("listOrgId") REFERENCES "listorgs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal" ADD CONSTRAINT "personal_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal" ADD CONSTRAINT "personal_subDepartmentId_fkey" FOREIGN KEY ("subDepartmentId") REFERENCES "subDepartments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_continentId_fkey" FOREIGN KEY ("continentId") REFERENCES "Continent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Region" ADD CONSTRAINT "Region_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Neighborhood" ADD CONSTRAINT "Neighborhood_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_continentId_fkey" FOREIGN KEY ("continentId") REFERENCES "Continent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
