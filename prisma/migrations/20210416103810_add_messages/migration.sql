/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Messages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "text" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "messageId" INTEGER NOT NULL,
    "chatId" TEXT NOT NULL,
    "chatTitle" TEXT NOT NULL,
    "chatType" TEXT NOT NULL,
    "fromId" INTEGER NOT NULL,
    "fromIsBot" BOOLEAN NOT NULL,
    "fromFirstName" TEXT NOT NULL,
    "fromUsername" TEXT NOT NULL,
    "fromLanguageCode" TEXT NOT NULL
);
