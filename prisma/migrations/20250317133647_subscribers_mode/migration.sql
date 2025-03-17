/*
  Warnings:

  - You are about to drop the column `agreement` on the `contact_form` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `contact_form` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `contact_form` table. All the data in the column will be lost.
  - Added the required column `service` to the `contact_form` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "contact_form_email_key";

-- AlterTable
ALTER TABLE "contact_form" DROP COLUMN "agreement",
DROP COLUMN "message",
DROP COLUMN "name",
ADD COLUMN     "features" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "service" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateTable
CREATE TABLE "subscribers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "agreement" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscribers_email_key" ON "subscribers"("email");
