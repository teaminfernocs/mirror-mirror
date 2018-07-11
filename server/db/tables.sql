CREATE TABLE "users" (
	"id" serial NOT NULL,
	"created_at" DATE NOT NULL DEFAULT NOW(),
	"updated_at" DATE NOT NULL DEFAULT NOW(),
	"github_username" VARCHAR(255) NOT NULL,
	"github_displayname" VARCHAR(255) NOT NULL,
	"email" VARCHAR(255),
	"github_id" VARCHAR(255) NOT NULL UNIQUE,
	"profile_pic" VARCHAR(255) NOT NULL,
	"phone" VARCHAR(255),
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "companies" (
	"id" serial NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"website" VARCHAR(255),
	"city" VARCHAR(255),
	"state" VARCHAR(255),
	"country" VARCHAR(255),
	"created_at" DATE NOT NULL DEFAULT NOW(),
	"updated_at" DATE NOT NULL DEFAULT NOW(),
	CONSTRAINT companies_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "interviews" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"company_id" integer NOT NULL,
	"position" VARCHAR(255) NOT NULL,
	"notes" VARCHAR(255) NOT NULL,
	"type" VARCHAR(255) NOT NULL,
	"interview_date" VARCHAR(255) NOT NULL,
	"questions" TEXT[],
	"created_at" DATE NOT NULL DEFAULT NOW(),
	"updated_at" DATE NOT NULL DEFAULT NOW(),
	CONSTRAINT interviews_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "appointments" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"company_id" integer NOT NULL,
	"notification" integer NOT NULL,
	"timezone" VARCHAR(255) NOT NULL,
	"time" DATE NOT NULL,
	"message" TEXT NOT NULL,
	"created_at" DATE NOT NULL DEFAULT NOW(),
	CONSTRAINT appointments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "interviews" ADD CONSTRAINT "interviews_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_fk1" FOREIGN KEY ("company_id") REFERENCES "companies"("id");

ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk1" FOREIGN KEY ("company_id") REFERENCES "companies"("id");


