/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `contact_form` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "contact_form_email_key" ON "contact_form"("email");
