BEGIN;

CREATE TABLE IF NOT EXISTS public.todo (
	id bigint NOT NULL,
	title text,
	comment text,
	done boolean,
	PRIMARY KEY(id)
);

COMMIT;

END;