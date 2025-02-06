ALTER TABLE "waitlist" RENAME COLUMN "domain" TO "slug";--> statement-breakpoint
ALTER TABLE "waitlist" DROP CONSTRAINT "waitlist_domain_unique";--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_slug_unique" UNIQUE("slug");