/*
  Warnings:

  - You are about to drop the `Messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Messages";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "text" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "messageId" INTEGER NOT NULL,
    "chatId" TEXT NOT NULL,
    "chatTitle" TEXT,
    "chatType" TEXT NOT NULL,
    "fromId" INTEGER NOT NULL,
    "fromIsBot" BOOLEAN NOT NULL,
    "fromFirstName" TEXT NOT NULL,
    "fromUsername" TEXT,
    "fromLanguageCode" TEXT
);

-- CreateTable
CREATE TABLE "Download" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "url" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'requested',
    "fileName" TEXT,
    "failureReason" TEXT,
    "messageId" INTEGER NOT NULL,
    FOREIGN KEY ("messageId") REFERENCES "Message" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
