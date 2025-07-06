import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";
import { auditSchema } from "@schema/audit";
import * as changelogEntries from "./changelogEntries";
import { isAdminOrEditor } from "db/config-helpers";
import type { ApiConfig } from "db/routes";

export const tableName = "changelog_improvements";

export const route = "changelog-improvements";
export const name = "Changelog Improvements";
export const icon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>`;

export const definition = {
  id: text("id").primaryKey(),
  entryId: text("entryId").notNull(),
  improvement: text("improvement").notNull(),
};

export const table = sqliteTable(
  tableName,
  {
    ...definition,
    ...auditSchema,
  }
);

export const relation = relations(table, ({ one }) => ({
  entry: one(changelogEntries.table, {
    fields: [table.entryId],
    references: [changelogEntries.table.id],
    relationName: "changelogImprovements",
  }),
}));

export const access: ApiConfig["access"] = {
  operation: {
    create: isAdminOrEditor,
    read: true,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
};

export const hooks: ApiConfig["hooks"] = {};

export const fields: ApiConfig["fields"] = {
  id: {
    type: "textField",
  },
  entryId: {
    type: "textField",
  },
  improvement: {
    type: "textArea",
  },
};