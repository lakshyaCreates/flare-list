CREATE TABLE "waitlist" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"domain" text,
	"userId" text NOT NULL,
	CONSTRAINT "waitlist_domain_unique" UNIQUE("domain")
);
--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "waitlist_user_idx" ON "waitlist" USING btree ("name","userId");