insert into blogs (title, content, image)
values ($1, $2, $3)
returning *