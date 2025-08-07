/*
  Warnings:

  - You are about to drop the column `features` on the `contact_form` table. All the data in the column will be lost.
  - You are about to drop the column `service` on the `contact_form` table. All the data in the column will be lost.
  - Added the required column `email_id` to the `contact_form` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `contact_form` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `contact_form` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "contact_form" DROP COLUMN "features",
DROP COLUMN "service",
ADD COLUMN     "consent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "email_id" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;

-- CreateTable
CREATE TABLE "join_form" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "service" TEXT NOT NULL,
    "features" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "consent" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "join_form_pkey" PRIMARY KEY ("id")
);
