/*
  Warnings:

  - You are about to drop the column `usernme` on the `contact_form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contact_form" DROP COLUMN "usernme",
ADD COLUMN     "username" TEXT;
