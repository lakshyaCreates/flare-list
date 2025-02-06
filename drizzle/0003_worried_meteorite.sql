CREATE TABLE "preference" (
	"id" text PRIMARY KEY NOT NULL,
	"waitlistId" text NOT NULL,
	"logoType" "logoType" DEFAULT 'text',
	"font" text DEFAULT 'Bricolage Grotesque' NOT NULL,
	"h1Weight" "fontWeights" DEFAULT 'extrabold',
	"h2Weight" "fontWeights" DEFAULT 'semibold',
	"pWeight" "fontWeights" DEFAULT 'normal',
	"badge" text DEFAULT 'Sign up now and get 50% off at launch',
	"headline" text DEFAULT 'Software that sparks your imagination',
	"subtitle" text DEFAULT 'Unleash your creativity with our innovative software. From concept to creation, we provide the tools you need to bring your ideas to life.',
	"Join The Waitlist" text,
	"Your email" text,
	"Join 1234+ others waiting for the best app ever!" text,
	"https://x.com/yourcompany" text,
	"https://instagram.com/yourusernmae" text,
	"https://youtube.com/yourchannel" text,
	"https://linkedin.com/yourusername" text,
	"showcaseType" "showcaseType" DEFAULT 'disabled'
);
--> statement-breakpoint
ALTER TABLE "preference" ADD CONSTRAINT "preference_waitlistId_waitlist_id_fk" FOREIGN KEY ("waitlistId") REFERENCES "public"."waitlist"("id") ON DELETE cascade ON UPDATE no action;