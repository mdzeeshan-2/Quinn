
import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core"
export const workspaces = pgTable('workspace',{
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string',
    }),
    workspacesOwner: uuid('workspace_owner').notNull(),
    title: text('title').notNull(),
    inconId: text('icon_id').notNull(),
    data: text('data'),
    inTrash: text('in_trash'),
    logo: text('logo'),
    bannerUrl: text('banner_url'),
});