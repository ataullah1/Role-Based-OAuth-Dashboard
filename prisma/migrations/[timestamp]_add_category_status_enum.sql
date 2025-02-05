-- CreateEnum
CREATE TYPE "CategoryStatus" AS ENUM ('ENABLED', 'DISABLED');

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "status" TYPE "CategoryStatus" USING status::text::"CategoryStatus"; 