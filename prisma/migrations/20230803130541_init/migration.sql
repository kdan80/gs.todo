/*
  Warnings:

  - You are about to drop the column `todoListId` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `parentListId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "completed" INTEGER NOT NULL DEFAULT 0,
    "parentListId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Todo_parentListId_fkey" FOREIGN KEY ("parentListId") REFERENCES "TodoList" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Todo" ("completed", "created_at", "description", "id", "updated_at") SELECT "completed", "created_at", "description", "id", "updated_at" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
