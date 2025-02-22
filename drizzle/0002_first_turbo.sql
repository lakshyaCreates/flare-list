CREATE TABLE "waitlist" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"slug" text,
	"userId" text NOT NULL,
	"content" json DEFAULT '{"logoType":"text","logoText":"","logoImage":null,"logoIcon":"","logoPosition":"left","font":"","fontWeights":{"h1":"extrabold","h2":"semibold","p":"normal"},"template":"modern","badgeText":"Sign up now and get 50% off at launch","headline":"Software that sparks your imagination","subtitle":"Unleash your creativity with our innovative software. From concept to creation, we provide the tools you need to bring your ideas to life.","inputPlaceholder":"Your email","cta":"Join The Waitlist","socialProof":"Join 2,146 others waiting for the best app ever!","socials":{"x":"https://x.com/yourcompany","instagram":"https://instagram.com/your_username","facebook":null,"medium":null,"youtube":null,"linkedin":null},"successModal":{"title":"Thank your for joining","description":"Have some questions? Feel free to reach out!"},"seo":{"title":"Join waitlist","description":"Be the first to know when we launch"}}'::json NOT NULL,
	CONSTRAINT "waitlist_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "waitlist" ADD CONSTRAINT "waitlist_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;