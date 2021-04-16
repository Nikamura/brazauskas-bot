-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
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
    "fromLanguageCode" TEXT,
    "replyToMessageId" INTEGER,
    FOREIGN KEY ("replyToMessageId") REFERENCES "Message" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("id", "createdAt", "updatedAt", "text", "date", "messageId", "chatId", "chatTitle", "chatType", "fromId", "fromIsBot", "fromFirstName", "fromUsername", "fromLanguageCode") SELECT "id", "createdAt", "updatedAt", "text", "date", "messageId", "chatId", "chatTitle", "chatType", "fromId", "fromIsBot", "fromFirstName", "fromUsername", "fromLanguageCode" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
