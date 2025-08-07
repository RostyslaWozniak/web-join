/*
  Warnings:

  - You are about to drop the `join_form` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email_id]` on the table `contact_form` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "contact_form" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- DropTable
DROP TABLE "join_form";

-- CreateIndex
CREATE UNIQUE INDEX "contact_form_email_id_key" ON "contact_form"("email_id");
