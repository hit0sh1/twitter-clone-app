ALTER TABLE "posts" RENAME COLUMN "name" TO "handle";--> statement-breakpoint
DROP INDEX "Post_name_idx";--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "content" text NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "like" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "image" text;--> statement-breakpoint
CREATE INDEX "Post_handle_idx" ON "posts" USING btree ("handle");