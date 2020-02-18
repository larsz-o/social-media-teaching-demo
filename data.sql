
CREATE TABLE groups(
	id serial primary key,
	name varchar(10)
);
CREATE TABLE keywords(
	id serial primary key,
	name varchar (50),
	"group_id" int references groups(id)
);
CREATE TABLE news (
	id serial primary key,
	title varchar(250),
	image varchar(500),
	body text,
	showRating int
);
INSERT INTO keywords (name, "group_id") VALUES ('test', 1);