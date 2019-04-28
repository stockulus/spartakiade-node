BEGIN;

CREATE TABLE IF NOT EXISTS public.todo (
	id bigint NOT NULL,
	title text,
	new_column_1 text,
	done boolean,
	PRIMARY KEY(id)
);

COMMIT;

END;