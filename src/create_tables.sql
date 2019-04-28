BEGIN;

CREATE TABLE IF NOT EXISTS public.todo (
	id bigint DEFAULT nextval('todo_sampleid_seq'::regclass) NOT NULL,
	title text,
	new_column_1 text,
	done boolean,
	PRIMARY KEY(id)
);

COMMIT;

END;