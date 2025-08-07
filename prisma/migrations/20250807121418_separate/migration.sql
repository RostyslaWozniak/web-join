/*
  Warnings:

  - Added the required column `email_id` to the `join_form` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "join_form" ADD COLUMN     "email_id" TEXT NOT NULL;
