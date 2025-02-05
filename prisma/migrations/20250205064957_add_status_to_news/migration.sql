-- CreateEnum
CREATE TYPE "NewsStatus" AS ENUM ('PUBLISHED', 'PRIVATE');

-- AlterTable
ALTER TABLE "News" ADD COLUMN     "status" "NewsStatus" NOT NULL DEFAULT 'PUBLISHED',
ALTER COLUMN "image" DROP NOT NULL;
